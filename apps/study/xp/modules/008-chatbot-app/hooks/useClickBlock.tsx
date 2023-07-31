import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

export const useClickBlock = (maxClicks: number) => {
  const [clickCount, setClickCount] = useState(0)
  const [isBlocked, setIsBlocked] = useState(false)
  const [blockedTime, setBlockedTime] = useState<dayjs.Dayjs | null>(null)

  const handleButtonClick = () => {
    if (!isBlocked) {
      setClickCount((prevClickCount) => prevClickCount + 1)
    }
  }

  // Bloqueia a função handleSubmit após atingir o número máximo de cliques
  useEffect(() => {
    if (clickCount >= maxClicks && !isBlocked) {
      setIsBlocked(true)
      setBlockedTime(dayjs())
    }
  }, [clickCount, isBlocked, maxClicks])

  // Verifica se já se passaram 24 horas desde o bloqueio do botão
  useEffect(() => {
    if (isBlocked && blockedTime) {
      const twentyFourHoursAgo = dayjs().subtract(24, 'hours')
      if (blockedTime.isBefore(twentyFourHoursAgo)) {
        setIsBlocked(false)
        setClickCount(0)
      }
    }
  }, [isBlocked, blockedTime])

  return { isBlocked, handleButtonClick }
}
