import { Icon } from '@iconify/react'
import { Title } from '@kira/ui'
import { ReactNode, useEffect, useRef } from 'react'
import { useTypeWriter } from '../../hooks'

export type Message = {
  role: 'assistant' | 'user'
  content: string
}

type CardChatProps = {
  subject: string
  messages?: Message[]
  children: ReactNode
  containerRef?: React.RefObject<HTMLDivElement> // Adicione a prop containerRef
}

export const CardChat = ({
  subject,
  messages,
  children,
  containerRef
}: CardChatProps) => {
  const chatMessages = useTypeWriter({
    messages: messages || []
  })

  useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages, containerRef]) // Usar a prop "messages" no lugar do "chatMessages" para acionar o efeito corretamente

  return (
    <>
      <div className="w-full max-w-5xl flex justify-center">
        <Title label={subject} className="p-4" />
      </div>
      <div
        ref={containerRef}
        className="flex flex-col justify-between w-full max-w-5xl h-screen relative overflow-y-auto overflow-x-hidden p-4"
      >
        <div className="flex flex-col justify-between gap-8">
          {chatMessages.map((item, index) => (
            <div key={index}>
              {item.role === 'assistant' ? (
                <div className="flex gap-4 w-full">
                  <Icon
                    icon={'mdi:robot'}
                    width={32}
                    className="text-brand-dark rounded-full bg-brand-accent p-2 h-full"
                  />
                  <p className="text-brand-accent w-full whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              ) : (
                <div className="flex gap-4">
                  <Icon
                    icon={'mdi:account'}
                    width={32}
                    className="text-brand-light rounded-full bg-brand-primary p-2 h-full"
                  />
                  <p className="whitespace-pre-line">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-5xl p-4">{children}</div>
    </>
  )
}
