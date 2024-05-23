'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ipad (props) {
  const { nodes, materials } = useGLTF('/models/ipad.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.Body}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wallpaper.geometry}
        material={materials.screen}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ipad_front_black.geometry}
        material={materials.bezel}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera_module_Body.geometry}
        material={materials.Body}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cameraglass.geometry}
        material={materials.glass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera_module2.geometry}
        material={materials.camera2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cameraframe.geometry}
        material={materials.frame_and_logo}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera_glass_0.geometry}
        material={materials.glass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera1_camera1_0.geometry}
        material={materials.camera1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera1.geometry}
        material={materials.camera12}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera2_camera2_0.geometry}
        material={materials.camera2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lidar.geometry}
        material={materials.LiDar}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera1001.geometry}
        material={materials.camera1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera1002.geometry}
        material={materials.camera12}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera_module2001.geometry}
        material={materials['camera2.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Camera_Flash.geometry}
        material={materials.Camera_Flash}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera_module2002.geometry}
        material={materials['Speaker inner']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple_logo.geometry}
        material={materials.frame_and_logo}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Connector__0.geometry}
        material={materials.connector}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_camera001.geometry}
        material={materials.front_camera}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_camera.geometry}
        material={materials.camera12}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speakers_Mic_0.geometry}
        material={materials['Speaker inner']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line.geometry}
        material={materials.Line}
        position={[0, 2.164, -0.048]}
        scale={2.818}
      />
    </group>
  )
}

useGLTF.preload('/models/ipad.glb')
