import { Icon } from '@iconify/react'
import { ChangeEvent, InputHTMLAttributes } from 'react'

type masks =
  | 'cpf'
  | 'cnpj'
  | 'phone'
  | 'cep'
  | 'currency'
  | 'date'
  | 'time'
  | 'custom'

type InputMaskProps = {
  id: string
  label: string
  icon?: string
  mask: masks
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputMask = ({
  label,
  id,
  placeholder,
  icon = 'twemoji:neutral-face',
  mask,
  onChange
}: InputMaskProps) => {
  switch (mask) {
    case 'cpf':
      return (
        <>
          <label
            htmlFor={id}
            className="uppercase text-brand-light font-bold my-2"
          >
            {label}
          </label>
          <div className="flex items-center bg-brand-light rounded-md px-2 h-8 w-full max-w-xl text-brand-dark">
            <Icon icon={icon} />
            <input
              onChange={(ev) => onChange(ev)}
              className="rounded-md focus:outline-none px-2 w-full font-bold"
              value={'000.000.000-00'}
              type="text"
              maxLength={2}
              min={0}
              max={14}
              id={id}
              placeholder={placeholder}
            />
          </div>
        </>
      )
    case 'cnpj':
      break
    case 'phone':
      break
    case 'cep':
      break
    case 'currency':
      break
    case 'date':
      break
    case 'time':
      break
    case 'custom':
      break
    default:
  }
}
