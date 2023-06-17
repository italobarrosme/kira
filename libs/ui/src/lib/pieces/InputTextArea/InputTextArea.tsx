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
    <div className="w-full my-4">
      <label
        htmlFor={id}
        className="uppercase text-secondary-500 font-bold my-2 text-xs"
      >
        {label}
      </label>
      <div className="flex gap-2 bg-secondary-500 rounded-md p-2 w-full text-secondary-100 max-w-xl">
        {icon ? <Icon icon={icon} /> : null}
        <textarea
          onChange={(ev) => onChange(ev)}
          className="rounded-md focus:outline-none px-2 w-full h-60 max-h-96 p-4"
          id={id}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  )
}
