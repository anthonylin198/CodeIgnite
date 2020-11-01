import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import HeroSection2 from "../components/HeroSection2";
import InfoSection from "../components/InfoSection";
import PricingSection from "../components/Pricing";
import Services from "../components/Services";
import React, { useState } from "react";
import { homeObjOne, homeObjTwo } from "../components/HeroSection2/Data";
import Footer from "../components/Footer";
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
      <HeroSection2 />
      <PricingSection />
      {/* <InfoSection {...homeObjOne} /> */}
      {/* About Section */}
      {/* <Services /> */}
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <Footer />
    </>
  );
}
