/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react'

export const useHiNumber = () => {
  const [hitNumber, setHitNumber] = useState<number>()
  const [randomNumber, setRandomNumber] = useState<number>()
  const [result, setResult] = useState('')

  const handleNumber = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target
    setHitNumber(Number(value))

    if (!value) {
      setRandomNumber(undefined)
      setResult('')
    }
  }

  const showConfetti = () => {
    if (typeof window !== 'undefined') {
      window.confetti({
        particleCount: 150,
        spred: 60
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

  return {
    hitNumber,
    randomNumber,
    result,
    handleNumber,
    checkNumber
  }
}
