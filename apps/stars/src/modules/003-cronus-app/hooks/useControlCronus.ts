/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { useEffect, useState } from 'react'
dayjs.extend(duration)

export const useControlCronus = () => {
  const [clock, setClock] = useState(dayjs.duration(0, 'millisecond'))
  const [isPausePlaying, setIsPausePlaying] = useState(false)
  const [isInitState, setIsInitState] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [intervalId, setIntervalId] = useState<any>(null)

  const playTimer = () => {
    setIsInitState(false)
    const interval = setInterval(() => {
      setClock((prev) => prev.add(5, 'millisecond'))
    }, 1)

    setIntervalId(interval)
  }

  const pauseTimer = () => {
    setIsPausePlaying((prev) => true)
    setIsPlaying((prev) => !prev)
    clearInterval(intervalId)
  }

  useEffect(() => {
    if (!isPlaying && isPausePlaying) {
      playTimer()
    }
  }, [isPausePlaying, isPlaying])

  const resetTimer = () => {
    setIsPlaying(false)
    setIsPausePlaying(false)
    clearInterval(intervalId)

    setIsInitState(true)
    setClock(dayjs.duration(0, 'millisecond'))
  }

  return {
    clock,
    playTimer,
    pauseTimer,
    resetTimer,
    isInitState
  }
}
