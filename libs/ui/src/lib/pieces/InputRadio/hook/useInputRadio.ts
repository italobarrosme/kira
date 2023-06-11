import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

type useInputRadioProps = {
  value?: string
  checked?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const useInputRadio = ({
  value,
  checked = false
}: useInputRadioProps) => {
  const [checkedValue, setCheckedValue] = useState(checked)
  const [valueItem, setValueItem] = useState(value)

  const handlerChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(ev.target.checked)
    setValueItem(ev.target.value)
  }

  return {
    checkedValue,
    valueItem,
    handlerChange
  }
}
