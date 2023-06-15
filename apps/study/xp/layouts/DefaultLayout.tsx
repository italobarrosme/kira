import Head from 'next/head'
import { Component } from './type'

export const DefaultLayout = ({ children, title }: Component) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary-100 font-poppins w-full h-screen px-4 text-secondary-500 overflow-hidden">
        <div className="mx-auto p-8">{children}</div>
      </main>
    </>
  )
}
