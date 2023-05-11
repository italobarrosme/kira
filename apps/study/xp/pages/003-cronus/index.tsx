import { Icon } from '@iconify/react'
import { XpLayout } from '../../layouts'
import { Button } from '@kira/ui'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const Cronus = () => {
  const [clock, setClock] = useState(dayjs.duration(0, 'millisecond'))
  const [isPausePlaying, setIsPausePlaying] = useState(false)
  const [isInitState, setIsInitState] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [intervalId, setIntervalId] = useState<any>(null)

  const playTimer = () => {
    setIsInitState(false)
    const interval = setInterval(() => {
      setClock((prev) => prev.add(1, 'millisecond'))
    }, 1)

    setIntervalId(interval)
  }

  const pauseTimer = () => {
    setIsPausePlaying((prev) => true)
    setIsPlaying((prev) => !prev)
    clearInterval(intervalId)
  }

  useEffect(() => {
    console.log('isPausePlaying', isPausePlaying)
    console.log('isPlaying', isPlaying)
    if (!isPlaying && isPausePlaying) {
      console.log('veio aqui?')
      playTimer()
    }
  }, [isPausePlaying, isPlaying])

  const resetTimer = () => {
    console.log('reset')

    setIsPlaying(false)
    setIsPausePlaying(false)
    clearInterval(intervalId)

    setIsInitState(true)
    setClock(dayjs.duration(0, 'millisecond'))
  }

  return (
    <XpLayout title="Cronus">
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Cronus</h1>

        <div className="my-8">
          <span className="text-4xl font-bold">
            {clock.format('HH:mm:ss.SSS')}
          </span>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Button
            label="Iniciar"
            icon="mdi:timer-play"
            onClick={() => playTimer()}
            disabled={!isInitState}
          />
          <Button
            label="Pausar"
            icon="mdi:timer-stop"
            onClick={() => pauseTimer()}
            disabled={isInitState}
          />
          <Button
            label="Zerar"
            icon="mdi:timer-refresh"
            onClick={() => resetTimer()}
            disabled={isInitState}
          />
        </div>
      </section>
    </XpLayout>
  )
}

export default Cronus
