import { Button, InputText } from '@kira/ui'
import { CardChat } from '../components/CardChat'
import { useChat } from 'ai/react'
import { useEffect } from 'react'

export const Checkpoint = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chatbot'
  })

  useEffect(() => {
    console.log(messages)
  }, [messages])

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4  h-">
      <CardChat id={1} subject="Chatbot" messages={messages}>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between gap-2 h-9 items-center"
        >
          <InputText
            placeholder="Type here..."
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit" label="Send" className="w-1/4" />
        </form>
      </CardChat>
    </div>
  )
}
