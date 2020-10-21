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
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>Reduce Expenses 1</ServicesH2>
          <ServicesP>We help you do a lot of things</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>Reduce Expenses 2</ServicesH2>
          <ServicesP>We help you do a lot of things</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img1} />
          <ServicesH2>Reduce Expenses 3</ServicesH2>
          <ServicesP>We help you do a lot of things</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
