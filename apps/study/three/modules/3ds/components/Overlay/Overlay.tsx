import { ReactNode } from 'react'

type OverlayProps = {
  children: ReactNode
  className?: string
}

export const Overlay = ({ children }: OverlayProps) => {
  return <div className={'absolute z-10 h-full w-full p-4'}>{children}</div>
}
