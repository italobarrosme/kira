import { Icon } from '@iconify/react'
import { TextareaHTMLAttributes } from 'react'

type InputTextAreaProps = {
  label?: string
  value?: string
  icon?: string
  onChange: (value: string) => void
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const InputTextArea = ({
  label,
  value,
  onChange,
  placeholder,
  id,
  icon = 'twemoji:neutral-face',
  ...props
}: InputTextAreaProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center bg-secondary-500 rounded-md px-2 w-full text-secondary-100">
        <Icon icon={icon} />
        <textarea
          onChange={(ev) => onChange(ev)}
          className="rounded-md focus:outline-none px-2 w-full"
          id={id}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </>
  )
}
