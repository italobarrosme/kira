/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button, InputText } from '@kira/ui'
import { CardChat } from '../components/CardChat'
import { useEffect, useState } from 'react'
import {
  getResponseChat,
  getResponseButtonState,
  postResponseButtonState
} from '../services'

export const Chatbotai = () => {
  const [input, setInput] = useState('')

  const [messages, setMessages] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)

  const [clickBlock, setClickBlock] = useState<any>({
    isBlocked: false,
    clickCount: 0
  })

  useEffect(() => {
    const fetchButtonState = async () => {
      try {
        const { clickCount, blocked } = await getResponseButtonState('a')

        setClickBlock({ clickCount, isBlocked: blocked })
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchButtonState()
  }, [])

  const handleInputChange = (e: { target: { value: string } }) => {
    setInput(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const { clickCount, blocked } = await postResponseButtonState('a')

      setClickBlock({ clickCount, isBlocked: blocked })
    } catch (error) {
      console.log('error', error)
    }

    setIsLoading(true)
    try {
      const { choices } = await getResponseChat(input)

      setMessages((prev: any) => [
        ...prev,
        { role: 'user', content: input },
        ...(choices || []).map((item: any) => ({
          role: item.message.role,
          content: item.message.content
        }))
      ])

      setInput('')
    } catch (error) {
      console.log('error', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 w-full">
      <CardChat subject="Chatbot" messages={messages}>
        <div className="flex justify-between gap-2 w-full h-9 items-center">
          <InputText
            placeholder="Type here..."
            onChange={handleInputChange}
            value={input}
            maxLength={250}
          />
          <Button
            label="Send"
            className="w-36"
            onClick={() => {
              handleSubmit()
            }}
            isLoading={isLoading}
            disabled={clickBlock.isBlocked}
          />
        </div>
      </CardChat>
    </div>
  )
}
