import { Button, InputNumber } from '@kira/ui'
import { useHiNumber } from '../hooks'
import { Icon } from '@iconify/react'

export const HitNumberApp = () => {
  const { checkNumber, handleNumber, randomNumber, hitNumber, result } =
    useHiNumber()

  return (
    <section className="flex flex-col justify-center items-center py-14">
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
          className="w-16"
          autoComplete="off"
        />
        {Number(randomNumber) >= 0 && Number(hitNumber) >= 0 ? (
          <Icon
            icon={`mdi:numeric-${randomNumber}-circle`}
            className="w-52 h-52"
          />
        ) : (
          <Icon icon="mdi:question-mark-box" className="w-52 h-52" />
        )}
      </div>
      <div className="w-52">
        <Button
          label="Verificar"
          onClick={() => checkNumber()}
          disabled={!Number(hitNumber)}
          className="bg-primary-500 text-primary-100 font-bold rounded-md p-2"
        ></Button>
      </div>
      <h2 className="text-primary-500 font-bold text-2xl my-2">{result}</h2>
    </section>
  )
}
