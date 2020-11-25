import React from "react";
import HeroCenterDark from "../sections/common/HeroCenterDark";
import Content1 from "../sections/overview/Content1";
import Content2 from "../sections/overview/Content2";
import Content3 from "../sections/overview/Content3";
import Feature2 from "../sections/overview/Feature2";
import CTA from "../sections/overview/CTA";
import PortalContent from "../sections/overview/PortalContent";
import PageWrapper from "../components/PageWrapper";

const overview = () => {
  return (
    <>
      <PageWrapper headerDark footerDark>
        <HeroCenterDark
          title="Program Overview"
          children="Creating the Technical Leaders of Tomorrow"
        />
        <Content1 />
        <Feature2 />
        <Content2 />
        <Feature2 />
        <Content3 />
        <PortalContent />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default overview;
