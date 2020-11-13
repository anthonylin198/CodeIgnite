import React, { useState } from "react";
import Navbar from "../components/LandingPages/Navbar";
import Sidebar from "../components/LandingPages/Sidebar";

import InfoSection from "../components/LandingPages/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
} from "../components/LandingPages/InfoSection/Data";
import Soon from "../components/LandingPages/ComingSoon";
import Footer from "../components/LandingPages/Footer";

// todo: new
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Feature2 from "../sections/about/Features";
const codinginterview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <PageWrapper footerDark>
        <Hero title="Coding Interview Course">Coming Soon...</Hero>
        {/* <Feature2 /> */}
      </PageWrapper>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      {/* <Soon /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default codinginterview;
