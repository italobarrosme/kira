'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center p-2 w-36 fixed left-4 z-[60]"
    >
      <Icon icon="twemoji:backhand-index-pointing-left" width={24} />
      <span className="p-2 text-2xl font-bold ">{children}</span>
    </Link>
  )
}
