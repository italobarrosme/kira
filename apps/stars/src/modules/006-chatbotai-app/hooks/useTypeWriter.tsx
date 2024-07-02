import { useEffect, useState, useRef } from 'react'

type Message = {
  role: 'assistant' | 'user'
  content: string
}

type useTypeWriterProps = {
  messages: Message[]
}

export const useTypeWriter = ({ messages }: useTypeWriterProps) => {
  const [typingState, setTypingState] = useState<Message[]>([])
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let currentIndex = 0

    const typeNextCharacter = () => {
      const currentMessage = messages[currentIndex]

      if (!currentMessage) return

      const { content } = currentMessage
      const typingMessage = typingState[currentIndex]

      if (!typingMessage || typingMessage.content.length < content.length) {
        setTypingState((prevState) => {
          const updatedTypingState = [...prevState]
          const updatedMessage = {
            ...currentMessage,
            content: content.slice(0, typingMessage?.content.length + 1 || 0)
          }
          updatedTypingState[currentIndex] = updatedMessage
          return updatedTypingState
        })
      } else {
        currentIndex++
      }
    }

    typingTimerRef.current = setInterval(typeNextCharacter, 0) // Intervalo fixo de 100 milissegundos

    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current)
      }
    }
  }, [messages, typingState])

  return typingState
}
