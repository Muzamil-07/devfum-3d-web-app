'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Macbook (props) {
  const { nodes, materials } = useGLTF('/models/macbook.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom_body.geometry}
        material={materials.body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ports.geometry}
        material={materials.ports}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.words.geometry}
        material={materials.letters}
        position={[0, 0.002, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speaker.geometry}
        material={materials.speakers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.led.geometry}
        material={materials.led}
        position={[0, 0.085, -1.022]}
        rotation={[-1.584, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_bottom.geometry}
        material={materials['screen bottom']}
        position={[0, 0.085, -1.022]}
        rotation={[-1.584, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
        material={materials.glass}
        position={[0, 0.085, -1.022]}
        rotation={[-1.584, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wallpaper.geometry}
        material={materials.wallpaper}
        position={[0, 0.085, -1.022]}
        rotation={[-1.584, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        material={materials.logo}
        position={[-0.036, 1.159, -1.091]}
        rotation={[1.558, 0, Math.PI]}
        scale={[32.945, 32.945, 33.488]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buttom_support.geometry}
        material={materials.body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom_rubber.geometry}
        material={materials.rubber}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2001.geometry}
        material={materials.keyboard}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2001_1.geometry}
        material={materials.keys}
      />
    </group>
  )
}

useGLTF.preload('/models/macbook.glb')
