'use client'

import { ChangeEvent, useState } from 'react'

type useInputTextProps = string

export const useInputText = (initialValue: useInputTextProps) => {
  const [value, setValue] = useState<string>(initialValue)

  const handlerChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target as HTMLInputElement
    setValue(value)
  }

  return {
    value,
    handlerChange
  }
}
