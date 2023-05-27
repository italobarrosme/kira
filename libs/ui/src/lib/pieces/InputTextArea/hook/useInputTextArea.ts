import { ChangeEvent, useState } from 'react'

export const useInputTextArea = () => {
  const [textArea, setTextArea] = useState<string>('')

  const handlerTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target

    setTextArea(value)
  }

  return {
    handlerTextArea,
    textArea
  }
}
