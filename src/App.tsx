import React, {useRef, Suspense, useEffect} from 'react';
import './App.css';
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei'

const Eve = () => {
  const ref = useRef<THREE.Group>(null!)
  const { nodes, materials } = useGLTF('./assets/eve.glb')
  const { animations } = useGLTF('/assets/eve@walking.glb')
  const { actions } = useAnimations(animations, ref)
  const { camera } = useThree()

  useFrame(() => {
    camera.lookAt(0, 1, 0)
  })

  useEffect(() => {
    actions['Armature|mixamo.com|Layer0']!.play()
  }, [actions])

  return(
    <group ref={ref} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh castShadow name="Mesh" frustumCulled={false}
                      geometry={(nodes.Mesh as THREE.SkinnedMesh).geometry} material={materials.SpacePirate_M}
                      skeleton={(nodes.Mesh as THREE.SkinnedMesh).skeleton}
          />
        </group>
      </group>
    </group>
  )
}

const Loader = () => {
  return <div className="loader"></div>
}

const App = () => {
  return (
    <div style={{ width: "100vw", height: "75vh" }}>
      <Suspense fallback={<Loader />}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[2, 1.5, 2]} />
          <Environment preset="forest" background />
          <Eve />
          <OrbitControls />
          <axesHelper args={[5]} />
          <gridHelper />
          <Stats />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
