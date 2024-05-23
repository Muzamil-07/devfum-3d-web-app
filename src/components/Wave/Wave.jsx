'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Lights from '@/components/CanvasScreen/Lights'

function Wave ({ opacity, rotation }) {
  const linesRef = useRef([])
  const [initialized, setInitialized] = useState(false)
  const numLines = 50 // Number of lines for smoother transitions
  const numPoints = 300 // Number of points per line for smoother curves
  const amplitude = 2 // Adjusted amplitude for broader waves
  const frequency = 0.15 // Adjusted frequency for smoother wave pattern
  const speed = 0.1 // Speed of wave animation
  const width = window.innerWidth / 100 // Width based on window size

  useEffect(() => {
    const tempLines = new Array(numLines).fill().map(() => {
      const geometry = new THREE.BufferGeometry()
      const points = new Float32Array(numPoints * 3)
      for (let i = 0; i < numPoints; i++) {
        points[i * 3] = (i / numPoints) * width * 10 - width * 5 // Span across the width
        points[i * 3 + 1] = 0
        points[i * 3 + 2] = 0
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(points, 3))
      return new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({
          color: new THREE.Color('#25DBE3'),
          opacity: opacity || 0.2,
          transparent: true
        })
      )
    })
    linesRef.current = tempLines
    setInitialized(true)
  }, [width])

  useFrame(state => {
    if (!initialized) return

    const { clock } = state
    const time = clock.getElapsedTime()

    linesRef.current.forEach((line, index) => {
      const wave = line.geometry.attributes.position.array
      for (let i = 0; i < numPoints; i++) {
        const x = (i / numPoints) * width * 10 - width * 5
        const y =
          Math.sin(x * frequency + time * speed + index * 0.08) * amplitude // Adjusted wave calculation for more consistent spacing
        wave[i * 3 + 1] = y
      }
      line.geometry.attributes.position.needsUpdate = true
    })
  })

  return (
    <group rotation={rotation}>
      {linesRef.current.map((line, index) => (
        <primitive
          key={index}
          object={line}
          position-y={index * 0.05 - numLines * 0.025} // Adjusted vertical spacing for more consistency
        />
      ))}
    </group>
  )
}

const WavePlane = ({ opacity, rotation }) => {
  return (
    <Canvas camera={{ position: [10, 5, 10], fov: 35 }}>
      <Lights />
      <Wave opacity={opacity} rotation={rotation} />
    </Canvas>
  )
}

export default WavePlane
