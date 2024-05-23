"use client";

import React, { useState, useRef } from "react";
import {
  IndustryPageMainContainer,
  IndustryPageSubContainer,
  ConfiguratorContainer,
  ConfiguratorSwiperButton,
  ConfiguratorItemContainer,
  IndustrySidebarOpenButton,
} from "@/themes/themes";
import AnimatedHeader from "@/components/AnimatedHeader";
import Slider from "react-slick";
import Image from "next/image";
import LeftIcon from "/public/leftIcon.svg";
import RightIcon from "/public/rightIcon.svg";
import Chair from "/public/chair.png";
import SideBarButtonOpenIcon from "/public/leftWhite.svg";
import ConfiguratorSidebar from "@/components/ConfiguratorSidebar";

const configurators = [
  {
    id: 1,
    name: "Chair",
    description: `Experience an exciting demonstration of our prototype for a 3D 
configurator designed specifically for the PlayStation 5. This innovative 
tool allows users to customize their gaming console by incorporating skins 
inspired by popular games such as Last of Us, Red Dead Redemption, 
GTA, and Spiderman. With the simple selection of different skins, witness 
dynamic changes unfold on the PlayStation 5 console in real-time. 
Immerse yourself in the versatility of design options, providing a unique 
and personalized touch to your gaming experience. 
`,
    img: Chair,
    options: {
      type: "Color",
      values: [
        { img: "", text: "#8C0404" },
        { img: "", text: "#8C0404" },
        { img: "", text: "#8C0404" },
        { img: "", text: "#8C0404" },
      ],
    },
  },
  {
    id: 2,
    name: "PS5",
    description: `Experience an exciting demonstration of our prototype for a 3D 
configurator designed specifically for the PlayStation 5. This innovative 
tool allows users to customize their gaming console by incorporating skins 
inspired by popular games such as Last of Us, Red Dead Redemption, 
GTA, and Spiderman. With the simple selection of different skins, witness 
dynamic changes unfold on the PlayStation 5 console in real-time. 
Immerse yourself in the versatility of design options, providing a unique 
and personalized touch to your gaming experience. 
`,
    img: Chair,
    options: {
      type: "Color",
      values: [
        { img: "", text: "#8C0404" },
        { img: "", text: "#8C0404" },
        { img: "", text: "#8C0404" },
        { img: "", text: "#8C0404" },
      ],
    },
  },
];
const settings = {};

const IndustrySection = () => {
  const [open, openSet] = useState(false);
  const [chooseOption, chooseOptionSet] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  let ref = useRef(null);
  const handleSlideChange = (number) => {
    setActiveIndex(number);
  };
  return (
    <>
      <ConfiguratorSidebar
        data={configurators[activeIndex]}
        open={open}
        openSet={openSet}
        chooseOptionSet={chooseOptionSet}
      />
      <IndustryPageMainContainer>
        <IndustryPageSubContainer maxWidth='xl'>
          <AnimatedHeader
            text='DEMO OF SOME OF OUR 3D PRODUCT CONFIGURATOR'
            primary={[7]}
            sx={{ maxWidth: "709px", textAlign: "center" }}
          />
          <ConfiguratorContainer className='slider-container'>
            <ConfiguratorSwiperButton
              props={{ direction: "left" }}
              variant='contained'
              onClick={() => ref?.slickPrev()}
            >
              <Image src={LeftIcon} />
            </ConfiguratorSwiperButton>
            <Slider
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              draggable
              easing
              touchMove
              ref={(slider) => {
                ref = slider;
              }}
              afterChange={handleSlideChange}
            >
              {configurators.map((item, index) => {
                return (
                  <ConfiguratorItemContainer key={index}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </ConfiguratorItemContainer>
                );
              })}
            </Slider>
            <ConfiguratorSwiperButton
              props={{ direction: "right" }}
              onClick={() => ref?.slickNext()}
            >
              <Image src={RightIcon} />
            </ConfiguratorSwiperButton>
          </ConfiguratorContainer>
        </IndustryPageSubContainer>
        <IndustrySidebarOpenButton onClick={() => openSet(true)}>
          <Image src={SideBarButtonOpenIcon} />
        </IndustrySidebarOpenButton>
      </IndustryPageMainContainer>
    </>
  );
};

export default IndustrySection;
