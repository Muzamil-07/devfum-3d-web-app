'use client'
import { Environment } from '@react-three/drei'
import React from 'react'

const Lights = () => {
  return (
    <>
      {/* <directionalLight position={[4, 0, 6]} intensity={1.8} />
      <directionalLight position={[-4, 0, -6]} intensity={1.8} />
      <directionalLight castShadow position={[0, 5, 0]} intensity={1.2} />
      <pointLight position={[0, -3, 0]} intensity={1.5} />
      <ambientLight intensity={1} /> */}
      <Environment
        background={false} // can be true, false or "only" (which only sets the background) (default: false)
        blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
        // files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
        // path='/'
        preset={'city'}
        // scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
        // encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
      />
    </>
  )
}

export default Lights
