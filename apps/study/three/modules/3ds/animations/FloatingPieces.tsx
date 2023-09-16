'use client'

import * as THREE from 'three'
import { Detailed } from '@react-three/drei'
import { ReactNode, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

type FLoatingPiecesProps = {
  index: number
  z: number
  speed: number
  model: ReactNode
  props?: any
}

export function FloatingPieces({
  index,
  z,
  speed,
  props,
  model
}: FLoatingPiecesProps) {
  const ref = useRef() as any

  const { viewport, camera } = useThree()

  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])

  // Local component state, it is safe to mutate because it's fixed data
  const [data] = useState({
    // Randomly distributing the objects along the vertical
    y: THREE.MathUtils.randFloatSpread(height * 2),
    // This gives us a random value between -1 and 1, we will multiply it with the viewport width
    x: THREE.MathUtils.randFloatSpread(3),
    // How fast objects spin, randFlost gives us a value between min and max, in this case 8 and 12
    spin: THREE.MathUtils.randFloat(8, 12),
    // Some random rotations, Math.PI represents 360 degrees in radian
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  })

  useFrame((state, dt) => {
    // Make the X position responsive, slowly scroll objects up at the Y, distribute it along the Z
    // dt is the delta, the time between this frame and the previous, we can use it to be independent of the screens refresh rate
    // We cap dt at 0.1 because now it can't accumulate while the user changes the tab, it will simply stop
    if (dt < 0.1) {
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * speed),
        -z
      )
    }

    // Rotate the object around
    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    )
    // If they're too far up, set them back to the bottom
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1))
  })

  return (
    <Detailed {...props} ref={ref} distances={[0, 10, 40]}>
      {model}
    </Detailed>
  )
}
