import { Icon } from '@iconify/react'
import { cn } from '@kira/utils'
import { ButtonHTMLAttributes } from 'react'

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
      className={cn(
        'disabled:bg-gray-300 text-xs uppercase w-full disabled:text-brand-light bg-brand-primary border-2 justify-center border-transparent text-brand-dark font-bold py-2 px-4 rounded flex gap-4 hover:bg-brand-accent hover:text-secondary-100 hover:border-2 hover:border-secondary-100',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      {label}
    </button>
  )
}
