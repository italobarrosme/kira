import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export const Playground = () => {
  const Cube = (props: any) => {
    return (
      <mesh {...props} rotation={[10, 10, 0]} position={[0, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
        <meshStandardMaterial color={'#f6f'} attach="material" />
      </mesh>
    )
  }

  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 120], fov: 70 }}
    >
      <Cube />
      <color attach="background" args={['aquamarine']} />
      <spotLight
        position={[1, 10, 1]}
        penumbra={1}
        intensity={3}
        color="orange"
      />
    </Canvas>
  )
}
