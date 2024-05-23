'use client'
import { EndtoendTextContainer, MainContainer } from '@/themes/themes'
import { Box, Stack, Typography } from '@mui/material'
import DairyLand from '/public/dairyland.png'
import TotalParco from '/public/totalParco.png'
import Image from 'next/image'
import AnimatedHeader from '@/components/AnimatedHeader'
import CanvasScreen from '@/components/CanvasScreen'
import { Logo } from '@/components/3dModels/Logo'
import { Canvas } from '@react-three/fiber'
import { Macbook } from '@/components/3dModels/Macbook'
import { Ipad } from '@/components/3dModels/Ipad'
import Lights from '@/components/CanvasScreen/Lights'
import WavePlane from '@/components/Wave/Wave'
import { angleToRadians } from '@/lib'

const EndToEndSolutionSection = () => {
  return (
    <MainContainer
      maxWidth='xl'
      sx={{ position: 'relative', overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0 // Ensure it is behind the content
        }}
      >
        <WavePlane opacity={0.2} />
        {/* Adjust the opacity as needed */}
      </Box>
      <Stack direction={'row'} sx={{ position: 'relative', zIndex: 1 }}>
        <Box>
          <AnimatedHeader
            text='end to end digital solution'
            primary={[0, 1, 2]}
            sx={{ maxWidth: '550px' }}
            variant='h4'
          />
          <Typography maxWidth='600px' mt={5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown printer took a galley of type and
            scrambled it to make a specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum too passages, and
            more recently with desktop publishing software like Aldus jeh
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>

        {/************ 3D SECTION ***********/}
        <Box sx={{ height: '400px', width: '100%' }}>
          <Canvas
            style={{ zIndex: 1 }}
            shadows
            dpr={[1, 2]}
            gl={{ antialias: true }}
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [0, 0, 6],
              zoom: 1
            }}
          >
            <Lights />
            <Macbook position={[0, -1.3, 0]} scale={1.2} />
            <Ipad position={[2.5, -0.3, -1.5]} scale={1.2} />
          </Canvas>
        </Box>
      </Stack>

      <Stack gap={2} sx={{ marginTop: '5.5rem', alignItems: 'center' }}>
        <Typography>TRUSTED BY THE MOST INNOVATIVE COMPANIES</Typography>
        <Stack direction='row' gap={8} height='35px'>
          <Image src={DairyLand} style={{ height: '100%', width: 'auto' }} />
          <Image src={TotalParco} style={{ height: '100%', width: 'auto' }} />
          <Image src={DairyLand} style={{ height: '100%', width: 'auto' }} />
          <Image src={TotalParco} style={{ height: '100%', width: 'auto' }} />
          <Image src={TotalParco} style={{ height: '100%', width: 'auto' }} />
        </Stack>
      </Stack>
    </MainContainer>
  )
}

export default EndToEndSolutionSection
