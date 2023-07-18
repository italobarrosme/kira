import { cn } from '@kira/utils'

type SimpleCardProps = {
  title?: string
  description?: string
  size?: 'small' | 'medium' | 'large'
} & React.HTMLAttributes<HTMLDivElement>

export const SimpleCard = ({
  title,
  description,
  size = 'medium',
  className,
  style,
  ...props
}: SimpleCardProps) => {
  const sizeMap = {
    small: 'w-[320px] h-[320px]',
    medium: 'w-[540px] h-[540px]',
    large: 'w-[720px] h-[720px]'
  }

  return (
    <div className={cn('rounded-md', sizeMap[size], className)} style={style}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
