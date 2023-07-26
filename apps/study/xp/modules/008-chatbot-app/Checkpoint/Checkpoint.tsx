import { Button, InputText } from '@kira/ui'
import { CardChat } from '../components/CardChat'
import { useState } from 'react'
import { getResponseChat } from '../services/'

export const Checkpoint = () => {
  const [input, setInput] = useState('')

  const [messages, setMessages] = useState<any>()

  const handleInputChange = (e: { target: { value: string } }) => {
    setInput(e.target.value)
  }

  const handleSubmit = async () => {
    const data = await getResponseChat(input)

    setMessages((prev: any) => [
      ...(prev || []),
      { role: 'user', content: input }
    ])

    if (data) {
      const { choices } = data

      const messages = choices.map((item: any) => ({
        role: item.message.role,
        content: item.message.content
      }))

      setMessages((prev: any) => [...prev, ...messages])

      console.log(messages, 'BOT MESSAGES')
    }

    setInput('')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4  h-">
      <CardChat subject="Chatbot" messages={messages}>
        <div className="flex justify-between gap-2 w-full h-9 items-center">
          <InputText
            placeholder="Type here..."
            onChange={handleInputChange}
            value={input}
            maxLength={250}
          />
          <Button label="Send" className="w-36" onClick={handleSubmit} />
        </div>
      </CardChat>
    </div>
  )
}
