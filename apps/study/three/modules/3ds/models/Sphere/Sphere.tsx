'use client'

import { useGLTF } from '@react-three/drei'
import { useStoreSphere } from './store'

export function Sphere() {
  const { data } = useStoreSphere()

  return (
    <mesh>
      <sphereGeometry args={[0.4, 16, 32]} />
      <meshStandardMaterial color={data.colorCurrent} />
    </mesh>
  )
}

useGLTF.preload('')
