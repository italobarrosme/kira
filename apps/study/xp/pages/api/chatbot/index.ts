import { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export const runtime = 'edge'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { text } = req.body

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [text]
  })

  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
