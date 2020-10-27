import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

import img1 from "../../public/images/server.svg";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Coding Programs</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>Full Stack Course</ServicesH2>
          <ServicesP>We help you do a lot of things</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>Algorithms Course</ServicesH2>
          <ServicesP>We help you do a lot of things</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>Career Course</ServicesH2>
          <ServicesP>We help you do a lot of things</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
