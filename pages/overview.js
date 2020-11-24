import React from "react";
import HeroCenter from "../sections/common/HeroCenter";
import Content1 from "../sections/overview/Content1";
import Content2 from "../sections/overview/Content2";
import Feature2 from "../sections/overview/Feature2";
import CTA from "../sections/overview/CTA";
import PageWrapper from "../components/PageWrapper";

const overview = () => {
  return (
    <>
      <PageWrapper>
        <HeroCenter
          title="Program Overview"
          children="Creating the Technical Leaders of Tomorrow"
        />
        <Content1 />
        <Feature2 />
        <Content2 />
        <Feature2 />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default overview;
