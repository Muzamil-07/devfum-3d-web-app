'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function Vision (props) {
  const { nodes, materials } = useGLTF('/models/vision.glb')

  const modelRef = useRef()
  useGSAP(() => {
    if (modelRef.current) {
      gsap.fromTo(
        modelRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 32, y: 32, z: 32, duration: 1 }
      )
    }
  })
  return (
    <group {...props} ref={modelRef} dispose={null}>
      <group
        position={[-0.005, 0.006, -0.004]}
        rotation={[0, -1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_1.geometry}
          material={materials.lMzofmcJBoknbil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_2.geometry}
          material={materials.dULQkYmOHsuNGwk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_3.geometry}
          material={materials.kgpBHanvuTGSAYr}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_4.geometry}
          material={materials.CLxgtuDKMkHlfIs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_5.geometry}
          material={materials.wHLUdvjLSAdAzpD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_6.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_7.geometry}
          material={materials.TOXCTGGcpkubhJV}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_8.geometry}
          material={materials.hOQFVPUkStlnLZL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_9.geometry}
          material={materials.rtSfIyWixTDVpUY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zVTeycOoDBbsgsY_10.geometry}
          material={materials.lciUnRZYuzqSpWr}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/vision.glb')
