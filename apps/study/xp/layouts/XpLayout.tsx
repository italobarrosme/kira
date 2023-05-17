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
      <main className="bg-primary-100 font-poppins h-screen px-4 text-secondary-500 ">
        <Link href="/" className="flex items-center p-2 w-36">
          <Icon icon="twemoji:backhand-index-pointing-left" width={24} />
          <span className="p-2 text-2xl font-bold ">Voltar</span>
        </Link>
        <div className="mx-auto">{children}</div>
      </main>
    </>
  )
}
