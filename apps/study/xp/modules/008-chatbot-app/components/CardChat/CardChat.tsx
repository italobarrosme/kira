import { Title } from '@kira/ui'
import { ReactNode } from 'react'

type CardChatProps = {
  id: string | number
  subject: string
  messages?: any[]
  children: ReactNode
}

export const CardChat = ({
  id,
  subject,
  messages,
  children
}: CardChatProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-80 h-1/2 relative overflow-y-auto">
      <div className="w-full flex justify-center">
        <Title label={subject} className="absolute top-0" />
      </div>
      {messages?.map((message) => (
        <div key={message.id} className="flex flex-col gap-2">
          {message.role === 'user' ? (
            <p>
              <span className="text-white">{message.content}</span>
            </p>
          ) : (
            <p>
              <span className="text-secondary-100">{message.content}</span>
            </p>
          )}
        </div>
      ))}

      <div className="absolute bottom-0 w-full">{children}</div>
    </div>
  )
}
