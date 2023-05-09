/* eslint-disable no-extra-boolean-cast */
import { Icon } from '@iconify/react'
import { InputNumber } from '@kira/ui'
import { ChangeEvent, useState } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    confetti: any;
  }
}

const HitNumber = () => {
  const [hitNumber, setHitNumber] = useState<number>()
  const [randomNumber, setRandomNumber] = useState<number>()
  const [result, setResult] = useState('')

  const handleNumber = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target
    setHitNumber(Number(value))

    if (!value) {
      setRandomNumber(0)
    }
  }

  const showConfetti = () => {
    
    if (typeof window !== "undefined") {
      window.confetti({
        particleCount: 150,
        spred:60
      })
    }
  }

  const machineRandomNumber = () => {
    const number = Math.floor(Math.random() * 10)
    setRandomNumber(number)

    return number
  }

  const checkNumber = () => {
    if (hitNumber === machineRandomNumber()) {
      setResult('Você acertou!')
      showConfetti()
    } else {
      setResult('Você errou!')
    }
    
    
  }

  return (
    <>
      <section className="flex flex-col h-screen justify-center items-center">
        <h1 className="font-bold text-2xl text-secondary-500 my-2">Acerte o número</h1>
        <div className='text-primary-500 flex flex-col items-center'>
          <InputNumber label='Insira um número de 0 a 9' maxNumber={9} icon='ic:outline-confirmation-number' id="qrcode" onChange={(ev) => handleNumber(ev)} />
          {Number(randomNumber) >= 0 && hitNumber ? <Icon width={200} icon={`mdi:numeric-${randomNumber}-circle`} /> : <Icon width={200} icon='mdi:question-mark-box' />}
        </div>
        <button className='bg-primary-500 text-primary-100 font-bold rounded-md p-2' onClick={() => checkNumber()}>Testar</button>

        <h2 className='text-primary-500 font-bold text-2xl my-2'>{result}</h2>
      </section>
      </>
  )
  
}

export default HitNumber;