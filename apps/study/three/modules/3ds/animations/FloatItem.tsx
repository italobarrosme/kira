'use client'

import { Detailed } from '@react-three/drei'
import { ReactNode, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Group } from 'three'

type FloatItemProps = {
  model: ReactNode
  props?: any
}

export function FloatItem({ props, model }: FloatItemProps) {
  const ref = useRef<Group>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.set(
        Math.cos(t / 4) / 8,
        Math.sin(t / 4) / 8,
        -0.2 - (1 + Math.sin(t / 1.5)) / 20
      )
      ref.current.position.y = Math.sin(t / 2) / 10
    }
  })

  return (
    <Detailed
      {...props}
      ref={ref}
      distances={[0, 0, 0]}
      position={[0, 0, 0]}
      scale={0.8}
    >
      {model}
    </Detailed>
  )
}
