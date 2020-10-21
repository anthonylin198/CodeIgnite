import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import React, { useState } from "react";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* Hero Section */}
      <HeroSection />
      <Services />
      {/* About Section */}
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
    </>
  );
}
