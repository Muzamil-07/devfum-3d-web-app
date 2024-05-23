'use client'

import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import Slider from 'react-slick'
import {
  ClientSectionMainContainer,
  ClientSliderHeader,
  MainContainer
} from '@/themes/themes'
import AnimatedHeader from '@/components/AnimatedHeader'
import ClientCard from '@/components/ClientCard'
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import WavePlane from '@/components/Wave/Wave'

const clients = [
  {
    name: 'Steve',
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates
 quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.
 Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem 
ut mollitia similique.
`,
    stars: 4
  },
  {
    name: 'Jobs',
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates
   quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.
   Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem
  ut mollitia similique.
  `,
    stars: 4
  },
  {
    name: 'Again Steve',
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates
   quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.
   Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem
  ut mollitia similique.
  `,
    stars: 4
  },
  {
    name: 'Again Steve',
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates
   quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.
   Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem
  ut mollitia similique.
  `,
    stars: 4
  },
  {
    name: 'Again Steve',
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates
   quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.
   Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem
  ut mollitia similique.
  `,
    stars: 4
  },
  {
    name: 'Again Steve',
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates
   quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.
   Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem
  ut mollitia similique.
  `,
    stars: 4
  },
  {
    name: 'Again Steve',
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates
   quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.
   Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem
  ut mollitia similique.
  `,
    stars: 4
  },
  {
    name: 'Again Steve',
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aliquam placeat error fuga voluptates
   quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem ut mollitia similique.
   Fuga voluptates quam labore quaerat nulla nobis suscipit nisi aut, quos eum rerum, asperiores autem
  ut mollitia similique.
  `,
    stars: 4
  }
]

export default () => {
  const [activeIndex, activeIndexSet] = useState(1)
  const handleSlideChange = number => {
    activeIndexSet(number + 1 === clients.length ? number : number + 1)
  }
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
        <WavePlane opacity={0.8} /> {/* Adjust the opacity as needed */}
      </Box>
      <ClientSectionMainContainer>
        <AnimatedHeader
          text='Our clients'
          primary={[1]}
          sx={{ textAlign: 'center' }}
        />
        <ClientSliderHeader className='slider-container'>
          <Swiper
            modules={[EffectCoverflow]}
            effect='coverflow'
            loop
            autoplay
            slidesPerView={1}
            centeredSlides
            centerInsufficientSlides
            loopAddBlankSlides
            // slidesOffsetAfter={500}
            // slidesOffsetBefore={50}
            coverflowEffect={{
              stretch: 100,
              slideShadows: false
            }}
            grabCursor
          >
            {clients.map((client, index) => {
              return (
                <SwiperSlide key={index}>
                  <ClientCard client={client} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </ClientSliderHeader>
      </ClientSectionMainContainer>
    </MainContainer>
  )
}
