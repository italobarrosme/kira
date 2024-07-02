'use client'
import { Playground } from '../modules/3ds/scenes/template'

export default async function Index() {
  return (
    <>
      <section className="bg-brand-dark min-h-screen text-brand-primary">
        <Playground></Playground>
      </section>
    </>
  )
}
