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
  icon = 'twemoji:neutral-face',
  ...props
}: InputTextAreaProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="flex bg-secondary-500 rounded-md p-2 w-full text-secondary-100  max-w-xl">
        <Icon icon={icon} />
        <textarea
          onChange={(ev) => onChange(ev)}
          className="rounded-md focus:outline-none px-2 w-full h-60 max-h-96 p-4"
          id={id}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </>
  )
}
