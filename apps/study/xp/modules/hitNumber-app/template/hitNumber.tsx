import { Button, InputNumber } from '@kira/ui'
import { useHiNumber } from '../hooks'
import { Icon } from '@iconify/react'

export const HitNumberApp = () => {
  const { checkNumber, handleNumber, randomNumber, hitNumber, result } =
    useHiNumber()

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-secondary-500 my-2">
        Acerte o número
      </h1>
      <div className="text-primary-500 flex flex-col items-center">
        <InputNumber
          label="Insira um número de 0 a 9"
          maxNumber={9}
          icon="ic:outline-confirmation-number"
          id="qrcode"
          onChange={(ev) => handleNumber(ev)}
        />
        {Number(randomNumber) >= 0 && Number(hitNumber) >= 0 ? (
          <Icon width={200} icon={`mdi:numeric-${randomNumber}-circle`} />
        ) : (
          <Icon width={200} icon="mdi:question-mark-box" />
        )}
      </div>

      <Button
        className="bg-primary-500 text-primary-100 font-bold rounded-md p-2"
        onClick={() => checkNumber()}
      >
        Testar
      </Button>
      <h2 className="text-primary-500 font-bold text-2xl my-2">{result}</h2>
    </section>
  )
}
