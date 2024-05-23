"use client";

import React from "react";
import { IndustryCardContainer, IndustryCardImage, IndustryCardText } from "@/themes/themes";
import { motion } from "framer-motion";
import Image from "next/image";

const IndustryCard = ({ data }) => {
  const containerAnimation = {
    initial: { scale: 1, border: "3px solid" },
    animate: { scale: 1.03, border: "0px", transition: { duration: 0.4 } },
  };
  const imageAnimation = {
    initial: {
      bottom: -20,
      opacity: 0,
    },
    animate: {
      bottom: 36,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const textAnimation = {
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
    <IndustryCardContainer
      component={motion.div}
      initial='initial'
      animate='initial'
      whileHover='animate'
      variants={containerAnimation}
      mx='auto'
    >
      <IndustryCardText component={motion.h1} variants={textAnimation}>
        {data.name}
      </IndustryCardText>
      <IndustryCardImage component={motion.div} variants={imageAnimation}>
        <Image
          src={data.img}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      </IndustryCardImage>
    </IndustryCardContainer>
  );
};

export default IndustryCard;
