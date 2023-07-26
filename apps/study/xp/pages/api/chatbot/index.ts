import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })

  const openai = new OpenAIApi(config)

  const { messages } = req.body

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages
  })

  const { choices } = response.data

  console.log('choices', choices)

  return res.status(200).json({ choices })
}
