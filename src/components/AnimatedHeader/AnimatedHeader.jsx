'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedHeaderContainer } from '@/themes/themes'

const AnimatedHeader = ({
  text,
  variant = 'h5',
  sx = {},
  primary = [],
  variants,
  delayAnimation
}) => {
  const defaultAnimation = {
    initial: {
      y: -10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'easeIn',
        stiffness: 200,
        duration: 0.2,
        delay: 2
      }
    }
  }
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })
  return (
    <AnimatedHeaderContainer
      variants={variants}
      ref={ref}
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      transition={{ staggerChildren: 0.1, delayChildren: delayAnimation }}
      component={motion.span}
      sx={{ ...sx }}
    >
      {text.split(' ').map((char, index) => {
        return (
          <AnimatedHeaderContainer
            key={index}
            className='heading'
            variant={variant}
            sx={{ color: primary.includes(index) && 'primary.main' }}
            component={motion.span}
            variants={defaultAnimation}
          >
            {char}
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          </AnimatedHeaderContainer>
        )
      })}
    </AnimatedHeaderContainer>
  )
}

export default AnimatedHeader
