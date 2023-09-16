import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode, Suspense } from 'react'
import { FloatItem } from '../../animations'

type ApresentationItemPorps = {
  props?: any
  model: ReactNode
}

export const ApresentationItem = ({ model, props }: ApresentationItemPorps) => {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: 5
        }}
        camera={{ position: [0, 0, 5], fov: 55 }}
      >
        <spotLight
          intensity={0.5}
          angle={0.3}
          penumbra={1}
          position={[0, 15, 3]}
          castShadow
        />
        <ambientLight intensity={0.7} />

        <FloatItem model={model} props={props} />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={1.1}
          far={0.8}
        />

        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </Suspense>
  )
}
