import Head from 'next/head'
import { Component } from './type'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { cn } from '@kira/utils'

export const XpLayout = ({ children, title, className }: Component) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={cn(
          'bg-primary-100 w-full font-poppin px-4 text-secondary-500',
          className
        )}
      >
        <Link
          href="/"
          className="flex items-center p-2 w-36 fixed left-0 z-[60]"
        >
          <Icon icon="twemoji:backhand-index-pointing-left" width={24} />
          <span className="p-2 text-2xl font-bold ">Voltar</span>
        </Link>
        <div className="mx-auto min-h-screen">{children}</div>
      </main>
    </>
  )
}
