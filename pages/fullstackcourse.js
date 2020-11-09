import React, { useState } from "react";

import Title from "../components/CoursePages/Title";
import Progress from "../components/CoursePages/Progress";
import Category from "../components/CoursePages/Category";
import NavBar from "../components/LandingPages/Navbar";
import {
  overview,
  javascriptfundamentals,
  webDevelopmentFundamentals,
  frontendGuide,
  backendGuide,
  projectPhase,
  productionPhase,
} from "../components/CoursePages/Category/Data";
const fullstackcourse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <Title />
      <Progress />
      <Category {...overview} />
      <Category {...javascriptfundamentals} />
      <Category {...webDevelopmentFundamentals} />
      <Category {...frontendGuide} />
      <Category {...backendGuide} />
      <Category {...projectPhase} />
      <Category {...productionPhase} />
      {/* <Category /> */}
      <h1>We are here in the fullstack course Title Section</h1>
      <h2>Component with Course Progress</h2>
      <h2>Section 0: Introduction with side scroll</h2>
      <h2>Section 1: Javascript Fundamentals</h2>
      <h2>Section 2: Web Development Fundamentals</h2>
      <h2>Section 3: Frontend Guide - Popular Frameworks</h2>
      <h2>Section 4: Server and Backend Guide</h2>
      <h2>Section 5: Product Phase</h2>
    </div>
  );
};

export default fullstackcourse;
