import { ChangeEvent, InputHTMLAttributes } from 'react'

type InputRadioProps = {
  label: string
  icon?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>
export const InputRadio = ({
  label,
  id,
  icon = 'twemoji:neutral-face',
  name,
  onChange,
  ...props
}: InputRadioProps) => {
  return (
    <div className="flex items-center gap-4 rounded-md px-2 h-8 w-full max-w-xl text-brand-primary">
      <input
        onChange={(ev) => onChange(ev)}
        className="w-6 h-6 text-brand-light cursor-pointer accent-primary-500"
        name={name}
        type="radio"
        id={id}
        {...props}
      />
      <label
        htmlFor={id}
        className="uppercase text-secondary-500 font-bold my-2"
      >
        {label}
      </label>
    </div>
  )
}
