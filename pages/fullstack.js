import React, { useState } from "react";
import Navbar from "../components/LandingPages/Navbar";
import Sidebar from "../components/LandingPages/Sidebar";
import InfoSection from "../components/LandingPages/InfoSection";
import InfoSectionHome from "../components/LandingPages/InfoSectionHome";
import {
  homeObjOne,
  homeObjTwo,
} from "../components/LandingPages/InfoSection/Data";
// import Features from "../components/LandingPages/Features";
import {
  homeInfoOne,
  homeInfoTwo,
  homeInfoThree,
} from "../components/LandingPages/InfoSectionHome/Data";
import Demo from "../components/LandingPages/Demo";
import Footer from "../components/LandingPages/Footer";

// todo: new stuff
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Feature2 from "../sections/about/Features";
import CTA from "../sections/about/CTA";
import Feature from "../sections/about/Features2";
import Features3 from "../sections/about/Features3";
const fullstack = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Full-Stack Course">
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </Hero>
        <Features3 />
        <CTA />
        {/* <Feature /> */}
        {/* <Feature2 /> */}

        {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
        {/* <Navbar toggle={toggle} /> */}
        {/* <InfoSection {...homeObjOne} /> */}
        {/* <Features /> */}
        {/* <InfoSectionHome {...homeInfoOne} /> */}
        {/* <InfoSectionHome {...homeInfoTwo} /> */}
        {/* <InfoSectionHome {...homeInfoThree} /> */}
        {/* <Demo /> */}
        {/* <Footer /> */}
        {/* <CTA /> */}
      </PageWrapper>
    </>
  );
};

export default fullstack;
