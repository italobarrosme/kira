import { NextApiRequest, NextApiResponse } from 'next'
import dayjs from 'dayjs'

const MAX_CLICKS = 5
const BLOCK_DURATION_HOURS = 1

const userStates: {
  [userId: string]: { clickCount: number; blockedTime: dayjs.Dayjs | null }
} = {}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Invalid user ID' })
  }

  if (!userStates[userId]) {
    userStates[userId] = { clickCount: 0, blockedTime: null }
  }

  const userState = userStates[userId]

  if (req.method === 'GET') {
    return res
      .status(200)
      .json({ clickCount: userState.clickCount, blocked: isBlocked(userState) })
  } else if (req.method === 'POST') {
    userState.clickCount += 1

    if (userState.clickCount >= MAX_CLICKS) {
      userState.blockedTime = dayjs()
    }

    return res
      .status(200)
      .json({ clickCount: userState.clickCount, blocked: isBlocked(userState) })
  } else {
    return res.status(405).json({ error: 'Method not allowed' })
  }
}

function isBlocked(userState: {
  clickCount: number
  blockedTime: dayjs.Dayjs | null
}) {
  if (!userState.blockedTime) {
    return false
  }

  const twentyFourHoursAgo = dayjs().subtract(BLOCK_DURATION_HOURS, 'hours')
  return userState.blockedTime.isAfter(twentyFourHoursAgo)
}
