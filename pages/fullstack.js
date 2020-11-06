import React, { useState } from "react";
import Navbar from "../components/LandingPages/Navbar";
import Sidebar from "../components/LandingPages/Sidebar";
import InfoSection from "../components/InfoSection";
import InfoSectionHome from "../components/InfoSectionHome";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Features from "../components/LandingPages/Features";
import {
  homeInfoOne,
  homeInfoTwo,
  homeInfoThree,
} from "../components/InfoSectionHome/Data";
import Demo from "../components/LandingPages/Demo";

const fullstack = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...homeObjOne} />
      <Features />
      <InfoSectionHome {...homeInfoOne} />
      <InfoSectionHome {...homeInfoTwo} />
      <InfoSectionHome {...homeInfoThree} />
      <Demo />
    </div>
  );
};

export default fullstack;
