'use client'

import { InputHTMLAttributes, ChangeEvent } from 'react'
import { Icon } from '@iconify/react'

export type InputTextProps = {
  label?: string
  icon?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputText = ({
  label,
  id,
  placeholder,
  icon = '',
  maxLength = 50,
  onChange,
  ...props
}: InputTextProps) => {
  return (
    <div className="w-full my-4">
      <label
        htmlFor={id}
        className="uppercase text-brand-light font-bold my-2 text-xs"
      >
        {label}
      </label>
      <div className="flex gap-2 items-center bg-brand-light rounded-md px-2 h-8 w-full text-brand-dark">
        {icon ? <Icon icon={icon} /> : null}
        <input
          onChange={(ev) => onChange(ev)}
          className="rounded-md focus:outline-none px-2 w-full"
          maxLength={maxLength}
          type="text"
          id={id}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  )
}
