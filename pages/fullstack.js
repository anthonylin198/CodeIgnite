import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import InfoSectionHome from "../components/InfoSectionHome";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Features from "../components/Features";
import {
  homeInfoOne,
  homeInfoTwo,
  homeInfoThree,
} from "../components/InfoSectionHome/Data";

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
    </div>
  );
};

export default fullstack;
