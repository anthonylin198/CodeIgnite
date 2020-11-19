import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import CTA from "../sections/about/CTA";
const about = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="About us">Online education of the future</Hero>
        <Content />
        <Team />
        {/* <CTA /> */}
      </PageWrapper>
    </>
  );
};

export default about;
