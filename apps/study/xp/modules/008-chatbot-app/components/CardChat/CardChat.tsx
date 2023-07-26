import { Icon } from '@iconify/react'
import { Title } from '@kira/ui'
import { ReactNode } from 'react'

export type Message = {
  role: 'assistant' | 'user'
  content: string
}

type CardChatProps = {
  subject: string
  messages?: Message[]
  children: ReactNode
}

export const CardChat = ({ subject, messages, children }: CardChatProps) => {
  return (
    <>
      <div className="w-full max-w-5xl flex justify-center">
        <Title label={subject} className="p-4" />
      </div>
      <div className="flex flex-col items-center justify-between w-full max-w-5xl h-screen  relative overflow-y-auto overflow-x-hidden p-4">
        <div className="flex flex-col justify-between gap-8">
          {messages
            ? messages.map((item, index) => (
                <div key={index}>
                  {item.role === 'assistant' ? (
                    <div className="flex gap-4 items-center w-full">
                      <Icon
                        icon={'mdi:robot'}
                        width={32}
                        className="text-brand-dark rounded-full bg-brand-accent p-2 h-full"
                      />
                      <p className="text-brand-accent w-full">{item.content}</p>
                    </div>
                  ) : (
                    <div className="flex gap-4 items-center">
                      <Icon
                        icon={'mdi:account'}
                        width={32}
                        className="text-brand-light rounded-full bg-brand-primary p-2 h-full"
                      />
                      <p className="">{item.content}</p>
                    </div>
                  )}
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="w-full max-w-5xl p-4">{children}</div>
    </>
  )
}
