import { Icon } from '@iconify/react'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export type ButtonProps = {
  label?: string
  icon?: string
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  icon = '',
  label = 'label',
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        'disabled:bg-secondary-300 text-xs uppercase w-full disabled:text-secondary-100 bg-primary-200 border-2 justify-center border-transparent text-white font-bold py-2 px-4 rounded flex gap-4 hover:bg-primary-100 hover:text-secondary-100 hover:border-2 hover:border-secondary-100'
      )}
      onClick={onClick}
      {...props}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      {label}
    </button>
  )
}
