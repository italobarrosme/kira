import { Button } from '@kira/ui'
import { useControlCronus } from '../hooks/'

export const CronusApp = () => {
  const { clock, isInitState, playTimer, pauseTimer, resetTimer } =
    useControlCronus()

  return (
    <section className="flex flex-col justify-center items-center py-14">
      <h1 className="text-4xl font-bold">Cronus</h1>

      <div className="my-8 w-52 flex justify-center">
        <span className="text-4xl font-bold">
          {clock.format('HH:mm:ss.SSS')}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center">
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
  )
}
