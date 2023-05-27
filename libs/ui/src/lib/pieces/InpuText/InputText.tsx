import { InputHTMLAttributes, ChangeEvent } from 'react'
import { Icon } from '@iconify/react'

export type InputTextProps = {
  id: string
  label: string
  icon?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputText = ({
  label,
  id,
  placeholder,
  icon = 'twemoji:neutral-face',
  maxLength = 9999,
  onChange
}: InputTextProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="uppercase text-secondary-500 font-bold my-2"
      >
        {label}
      </label>
      <div className="flex items-center bg-secondary-500 rounded-md px-2 h-8 w-full max-w-xl text-secondary-100">
        <Icon icon={icon} />
        <input
          onChange={(ev) => onChange(ev)}
          className="rounded-md focus:outline-none px-2 w-full"
          maxLength={maxLength}
          type="text"
          id={id}
          placeholder={placeholder}
        />
      </div>
    </>
  )
}
