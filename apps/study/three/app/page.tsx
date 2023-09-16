'use client'

import { FloatItem } from '../modules/3ds/animations'
import { Sphere } from '../modules/3ds/models'
import { ApresentationItem, GravityZero } from '../modules/3ds/scenes'

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <>
      <section className="bg-brand-dark min-h-screen text-brand-primary">
        <div></div>
        <ApresentationItem model={<Sphere />} />
      </section>
    </>
  )
}
