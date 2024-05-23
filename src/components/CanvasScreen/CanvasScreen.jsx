'use client'
import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Float,
  Html,
  OrbitControls,
  Preload,
  SoftShadows
} from '@react-three/drei'
import Lights from './Lights'
import { Logo } from '../3dModels/Logo'
import { angleToRadians } from '@/lib'
import { Vision } from '../3dModels/Vision'
import AnimatedHeader from '../AnimatedHeader'

const CanvasScreen = ({ children, float }) => {
  console.log(float)
  return (
    <Canvas
      style={{ zIndex: 1 }}
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 2, 6],
        zoom: 1
      }}
    >
      {/************ LIGHTS  ****************/}
      <Lights />
      {/************ ZOOM EFFECT  ****************/}

      {/************ SHADOWS  ****************/}
      {/* <SoftShadows size={25} samples={100} focus={0.6} /> */}
      <SoftShadows size={10} samples={30} focus={1} />

      <Suspense fallback={null}>
        <OrbitControls
          makeDefault
          //   autoRotate
          enableZoom={false}
          enablePan={false}
          //   maxPolarAngle={Math.PI / 2}
          //   minPolarAngle={Math.PI / 2}
        />

        {<Float enabled={float}>{children}</Float>}

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default CanvasScreen
