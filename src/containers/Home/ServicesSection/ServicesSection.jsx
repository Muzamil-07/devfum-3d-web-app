"use client";

import {
  MainContainer,
  SelectServiceContainer,
  SelectServiceName,
  SelectServiceSectionMainContainer,
  SelectServicesHoveredContainer,
  SelectServicesMainContainer,
  ServicesHoveredText,
  SelectServicesSliderContainer,
  SelectServiceButtonContainer,
  SelectServiceSliderButton,
  SelectServicesSubContainer,
  SelectServicesDivider,
} from "@/themes/themes";
import { useMediaQuery } from "@mui/material";
import SasSolution from "/public/sassolution.png";
import Image from "next/image";
import AnimatedHeader from "@/components/AnimatedHeader";
import { motion } from "framer-motion";
import Slider from "react-slick";
import React, { useRef } from "react";
import LeftIcon from "/public/leftIcon.svg";
import RightIcon from "/public/rightIcon.svg";

const services = [
  {
    name: "Sas Solution",
    img: SasSolution,
    description:
      "Do you need to invent and develop software you with quality solutions. DEVFUM Services provide Let the top engineers at from scratch?",
  },
  {
    name: "Sas Solution",
    img: SasSolution,
    description:
      "Do you need to invent and develop software you with quality solutions. DEVFUM Services provide Let the top engineers at from scratch?",
  },
  {
    name: "Sas Solution",
    img: SasSolution,
    description:
      "Do you need to invent and develop software you with quality solutions. DEVFUM Services provide Let the top engineers at from scratch?",
  },
  {
    name: "Sas Solution",
    img: SasSolution,
    description:
      "Do you need to invent and develop software you with quality solutions. DEVFUM Services provide Let the top engineers at from scratch?",
  },
];

const ServicesSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 850px)");
  const isMediumScreen = useMediaQuery("(max-width: 1200px)");
  let ref = useRef(null);
  const descAnimation = {
    initial: {
      bottom: -100,
      opacity: 0,
    },
    animate: {
      bottom: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const nameAnimation = {
    initial: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    animate: {
      opacity: 0,
    },
  };
  return (
    <MainContainer maxWidth='xl'>
      <SelectServiceSectionMainContainer className='box-center'>
        <AnimatedHeader
          text='select the service you need'
          primary={[2]}
          sx={{ textAlign: "center" }}
        />
        <SelectServicesSliderContainer className='slider-container'>
          <Slider
            infinite
            speed={500}
            slidesToShow={isSmallScreen ? 1 : isMediumScreen ? 2 : 4}
            slidesToScroll={isSmallScreen ? 1 : isMediumScreen ? 2 : 4}
            draggable
            easing
            touchMove
            ref={(slider) => {
              ref = slider;
            }}
          >
            {services.map((service, index) => {
              return (
                <SelectServicesMainContainer
                  key={index}
                  component={motion.div}
                  initial={isSmallScreen ? "animate" : "initial"}
                  whileHover='animate'
                  animate={isSmallScreen ? "animate" : "initial"}
                >
                  <SelectServicesSubContainer>
                    <SelectServiceContainer component={motion.div} variants={nameAnimation}>
                      <Image src={service.img} style={{ height: "70px", width: "70px" }} />
                      <SelectServiceName>{service.name}</SelectServiceName>
                    </SelectServiceContainer>
                    <SelectServicesHoveredContainer component={motion.div} variants={descAnimation}>
                      {isSmallScreen && (
                        <Image src={service.img} style={{ height: "70px", width: "70px" }} />
                      )}
                      <ServicesHoveredText className='heading'>{service.name}</ServicesHoveredText>
                      <ServicesHoveredText variant='body2'>
                        {service.description}
                      </ServicesHoveredText>
                    </SelectServicesHoveredContainer>
                  </SelectServicesSubContainer>
                  {!isSmallScreen && isMediumScreen ? (
                    !!(index & 1) ? null : (
                      <SelectServicesDivider />
                    )
                  ) : (
                    <SelectServicesDivider />
                  )}
                </SelectServicesMainContainer>
              );
            })}
          </Slider>
          <SelectServiceButtonContainer>
            <SelectServiceSliderButton variant='contained' onClick={() => ref?.slickPrev()}>
              <Image src={LeftIcon} />
            </SelectServiceSliderButton>
            <SelectServiceSliderButton onClick={() => ref?.slickNext()}>
              <Image src={RightIcon} />
            </SelectServiceSliderButton>
          </SelectServiceButtonContainer>
        </SelectServicesSliderContainer>
      </SelectServiceSectionMainContainer>
    </MainContainer>
  );
};

export default ServicesSection;
