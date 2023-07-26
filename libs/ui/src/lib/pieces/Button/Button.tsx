import { Icon } from '@iconify/react'
import { cn } from '@kira/utils'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  label?: string
  icon?: string
  isLoading?: boolean
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  icon = '',
  label = 'label',
  onClick,
  className,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'disabled:bg-gray-300 h-9 text-xs uppercase w-full disabled:text-brand-light bg-brand-primary border-2 justify-center items-center border-transparent text-brand-dark font-bold px-4 rounded flex gap-4 hover:bg-brand-accent hover:text-secondary-100 hover:border-2 hover:border-secondary-100',
        className
      )}
      onClick={onClick}
      name={label}
      {...props}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      {isLoading ? (
        <Icon icon="ri:loader-4-fill" className="animate-spin" width={24} />
      ) : (
        'Send'
      )}
    </button>
  )
}
