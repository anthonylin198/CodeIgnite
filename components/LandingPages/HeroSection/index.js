import React, { useState } from "react";
// import Video from "../../videos/video.mp4";
import { Button } from "../../Globals/ButtonElement";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  VideoBg,
  StaticBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const img = require("../../../public/images/background.jpg");

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={img} />
        {/* <StaticBg /> */}
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>CodeIgnite</HeroH1>
        <HeroP>
          The ultimate online resource to learn modern full-stack software
          engineering
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            smooth={true}
            duration={500}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
