import { Icon } from '@iconify/react'
import { ChangeEvent, TextareaHTMLAttributes } from 'react'

type InputTextAreaProps = {
  label?: string
  value?: string
  icon?: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const InputTextArea = ({
  label,
  value,
  onChange,
  placeholder,
  id,
  icon = '',
  ...props
}: InputTextAreaProps) => {
  return (
    <div className="w-full my-4 max-w-xl">
      <label
        htmlFor={id}
        className="uppercase text-brand-light font-bold my-2 text-xs"
      >
        {label}
      </label>
      <div className="flex gap-2 bg-brand-light rounded-md p-2 w-full text-brand-dark">
        {icon ? <Icon icon={icon} /> : null}
        <textarea
          onChange={(ev) => onChange(ev)}
          className="rounded-md focus:outline-none px-2 w-full h-60 max-h-96 font-bold"
          id={id}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  )
}
