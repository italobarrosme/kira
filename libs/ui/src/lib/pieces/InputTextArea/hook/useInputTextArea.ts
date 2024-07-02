import { ChangeEvent, useState } from 'react'

export const useInputTextArea = () => {
  const [textArea, setTextArea] = useState('')

  const handlerTextArea = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = ev.target

    setTextArea(value)
  }

  return {
    handlerTextArea,
    textArea
  }
}
