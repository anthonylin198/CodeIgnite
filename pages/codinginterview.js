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
const codinginterview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <InfoSection {...homeObjTwo} />
      <Soon />
      <Footer />
    </div>
  );
};

export default codinginterview;
