import { InputHTMLAttributes, ChangeEvent } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@kira/utils'

type InputNumberProps = {
  id: string
  label: string
  icon?: string
  maxNumber?: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputNumber = ({
  label,
  id,
  placeholder,
  icon = 'twemoji:neutral-face',
  maxNumber,
  onChange,
  autoComplete
}: InputNumberProps) => {
  return (
    <>
      <label htmlFor={id} className="uppercase text-brand-light font-bold my-2">
        {label}
      </label>
      <div
        className={cn(
          'flex items-center bg-brand-light rounded-md px-2 h-8 w-full max-w-xl'
        )}
      >
        <Icon icon={icon} />
        <input
          onChange={(ev) => onChange(ev)}
          className={cn('rounded-md focus:outline-none px-2 w-full font-bold')}
          type="text"
          maxLength={1}
          min={0}
          max={maxNumber}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
    </>
  )
}
