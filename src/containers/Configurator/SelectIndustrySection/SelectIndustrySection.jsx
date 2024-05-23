"use client";

import {
  ConfiguratorPageMainContainer,
  IndustriesContainer,
  SelectIndustryMainContainer,
} from "@/themes/themes";
import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import RingImage from "/public/ringImage.png";
import AnimatedHeader from "@/components/AnimatedHeader";
import IndustryCard from "@/components/IndustryCard/IndustryCard";
import { useRouter } from "next/navigation";

const industries = [
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
  {
    name: "Furniture",
    img: RingImage,
  },
];

const SelectIndustrySection = () => {
  const router = useRouter();
  const defaultAnimation = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "easeIn",
        stiffness: 200,
        duration: 0.4,
      },
    },
  };
  return (
    <>
      <ConfiguratorPageMainContainer>
        <AnimatedHeader
          text='WE SPECIALISED IN CREATING DYNAMIC3D PRODUCT CONFIGURATOR'
          sx={{ textAlign: "center", maxWidth: "863px" }}
          primary={[4]}
        />

        <SelectIndustryMainContainer>
          <AnimatedHeader
            text='SELECT THE INDUSTRY'
            sx={{ textAlign: "center" }}
            delayAnimation={0.8}
          />
        </SelectIndustryMainContainer>

        <IndustriesContainer
          container
          columns={3.5}
          component={motion.div}
          initial='initial'
          animate='animate'
          transition={{ staggerChildren: 0.2, delayChildren: 0.9 }}
        >
          {industries.map((industory, index) => {
            return (
              <Grid
                item
                key={index}
                onClick={() => router.push(`/configurator/${industory.name}`)}
                lg={1}
                md={1.5}
                xs={3.5}
                component={motion.div}
                variants={defaultAnimation}
              >
                <IndustryCard data={industory} />
              </Grid>
            );
          })}
        </IndustriesContainer>
      </ConfiguratorPageMainContainer>
    </>
  );
};

export default SelectIndustrySection;
