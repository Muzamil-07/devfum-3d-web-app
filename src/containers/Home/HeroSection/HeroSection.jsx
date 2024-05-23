'use client'
import { MainContainer, MainHeading, ProjectButton } from '@/themes/themes'
import { Stack, Typography } from '@mui/material'
import AnimatedHeader from '@/components/AnimatedHeader'
import CanvasScreen from '@/components/CanvasScreen'
import { Vision } from '@/components/3dModels/Vision'
import { Logo } from '@/components/3dModels/Logo'
import { Float, Html } from '@react-three/drei'
import { angleToRadians } from '../../../lib'
import zIndex from '@mui/material/styles/zIndex'
import { Canvas } from '@react-three/fiber'
import Lights from '@/components/CanvasScreen/Lights'

const HeroSection = () => {
  return (
    <MainContainer maxWidth='xl'>
      <Stack sx={{ height: `calc(100vh - 100px)` }} className='box-center'>
        <AnimatedHeader
          variant='h3'
          text='The Future is here'
          primary={[1]}
          sx={{ position: 'relative', top: '42%', zIndex: '10000' }}
        />
        {/* 3D SECTION */}
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
          <Lights />
          <Vision />
          <Logo
            scale={2.6}
            position={[0.3, 0.45, -0.4]}
            rotation={[angleToRadians(-15), 0, angleToRadians(15)]}
          />
        </Canvas>

        <ProjectButton
          sx={{ position: 'relative', top: '40%', zIndex: '10000' }}
        >
          Projects
        </ProjectButton>
      </Stack>
    </MainContainer>
  )
}

export default HeroSection
