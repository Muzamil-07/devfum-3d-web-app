'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Color } from 'three'

export function Logo (props) {
  const { nodes, materials } = useGLTF('/models/logo.glb')
  const modelRef = useRef()
  useGSAP(() => {
    if (modelRef.current) {
      gsap.fromTo(
        modelRef.current.position,
        { y: 6 },
        { y: 0.5, duration: 1, delay: 0.8 }
      )
    }
  })
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        // material={materials['Material.001']}
        rotation={[-0.007, 0, 0]}
        scale={[0.281, 0.28, 0.053]}
      >
        <meshStandardMaterial color={new Color('#25DBE3')} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/logo.glb')
