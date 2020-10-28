import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";

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
    </div>
  );
};

export default fullstack;
