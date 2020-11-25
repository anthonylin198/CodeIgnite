import Navbar from "../components/LandingPages/Navbar";
import Sidebar from "../components/LandingPages/Sidebar";
import HeroSection from "../components/LandingPages/HeroSection";
import HeroSection2 from "../components/LandingPages/HeroSection2";
import InfoSectionHome from "../components/LandingPages/InfoSectionHome";
import {
  homeInfoOne,
  homeInfoTwo,
  homeInfoThree,
} from "../components/LandingPages/InfoSectionHome/Data";
import InfoSection from "../components/LandingPages/InfoSection";
import PricingSection from "../components/LandingPages/Pricing";
import Services from "../components/LandingPages/Services";
import React, { useState } from "react";
import { splash } from "../components/LandingPages/HeroSection2/Data";
import {
  homeObjOne,
  homeObjTwo,
} from "../components/LandingPages/InfoSection/Data";
import Footer from "../components/LandingPages/Footer";

// todo: New
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing/Hero";
import Content from "../sections/landing/Content";
import Testimonials from "../sections/landing/Testimonials";
import Fact from "../sections/landing/Fact";
import CTA from "../sections/landing/CTA";
import Courses2 from "../sections/landing/Courses2";
import Features from "../sections/landing/Features";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  // create functionality for redux to get user information
  return (
    <>
      {/* we could put footer dark to make dark */}
      <PageWrapper footerDark>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
        {/* <Navbar toggle={toggle} /> */}
        {/* Hero Section */}
        <Hero />
        {/* <Testimonials />
        <Fact /> */}
        <Content />

        <CTA />
        {/* <Courses2 /> */}
        {/* <Features /> */}

        {/* <HeroSection2 {...splash} /> */}
        {/* <Services /> */}
        {/* <InfoSectionHome {...homeInfoOne} /> */}
        {/* <InfoSectionHome {...homeInfoTwo} /> */}
        {/* <PricingSection /> */}

        {/* <InfoSectionHome {...homeInfoThree} /> */}
        {/* <InfoSection {...homeObjOne} /> */}
        {/* About Section */}
        {/* <InfoSection {...homeObjOne} /> */}
        {/* <InfoSection {...homeObjTwo} /> */}
        {/* <Footer /> */}
      </PageWrapper>
    </>
  );
}
