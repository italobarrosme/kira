import { InputHTMLAttributes, ChangeEvent } from 'react'
import { Icon } from '@iconify/react'

export type InputSearchProps = {
  id: string
  label?: string
  icon?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputSearch = ({
  label,
  id,
  placeholder,
  icon = 'material-symbols:search-rounded',
  onChange,
  ...props
}: InputSearchProps) => {
  return (
    <>
      <label htmlFor={id} className=" text-brand-light my-2">
        {label}
      </label>
      <div className="flex items-center bg-brand-light rounded-md px-2 h-8 w-full max-w-xl text-brand-dark">
        <Icon icon={icon} />
        <input
          onChange={(ev) => onChange(ev)}
          className="rounded-md focus:outline-none px-2 w-full bg-brand-light font-bold"
          type="text"
          id={id}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </>
  )
}
