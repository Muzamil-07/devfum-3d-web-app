import {
  HeroSectionBackground,
  BgOverlay,
  HeroBackgroundTextContainer,
  HeroBgTag,
  HeroBgText,
  HeroBgUser,
  BgUserAvatar,
  BgUserName,
  BgUserDate,
} from "@/themes/themes";
import HeroBg from "/public/blogHero.png";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <HeroSectionBackground>
      <Image
        src={HeroBg}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <BgOverlay />
      <HeroBackgroundTextContainer gap={2}>
        <HeroBgTag>Technology</HeroBgTag>
        <HeroBgText variant="h5">
          The Impact of Technology on the Workplace: How Technology is Changing
        </HeroBgText>
        <HeroBgUser gap={1.5}>
          <BgUserAvatar>S</BgUserAvatar>
          <BgUserName>Steven Kong</BgUserName>
          <BgUserDate>August 20, 2022</BgUserDate>
        </HeroBgUser>
      </HeroBackgroundTextContainer>
    </HeroSectionBackground>
  );
};

export default HeroSection;
