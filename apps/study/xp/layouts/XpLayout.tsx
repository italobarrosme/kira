import Head from 'next/head'
import { Component } from './type'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export const XpLayout = ({ children, title }: Component) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen justify-center w-full items-center px-4">
        <Link href="/" className="flex items-center p-2">
          <Icon icon="twemoji:backhand-index-pointing-left" width={24} />
          <span className="p-2 text-2xl font-bold text-secondary-500">
            Voltar
          </span>
        </Link>
        {children}
      </main>
    </>
  )
}
