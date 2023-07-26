/* eslint-disable @typescript-eslint/no-explicit-any */
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

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages
    })

    const { choices } = response.data

    return res.status(200).json({ choices, error: null })
  } catch (error: any) {
    return res.status(500).json({ error: error.message, choices: null })
  }
}
