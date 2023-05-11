import { Icon } from '@iconify/react'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  label: string
  icon?: string
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  icon = 'fluent-emoji-flat:bug',
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className="disabled:bg-secondary-300 disabled:text-secondary-100 bg-primary-300 border-2 border-transparent text-white font-bold py-2 px-4 rounded flex gap-4 my-4 hover:bg-primary-100 hover:text-secondary-100 hover:border-2 hover:border-secondary-100"
      onClick={onClick}
    >
      <Icon icon={icon} width={24} />
      {label}
    </button>
  )
}
