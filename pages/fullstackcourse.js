import React, { useState } from "react";

import Title from "../components/CoursePages/Title";
import Progress from "../components/CoursePages/Progress";
import Category from "../components/CoursePages/Category";
import NavBar from "../components/LandingPages/Navbar";
import HeroCenter from "../sections/common/HeroCenter";
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
      {/* <NavBar toggle={toggle} /> */}
      <HeroCenter title="Full-Stack Course">
        Modern Full Stack Web Development
      </HeroCenter>
      {/* <Title /> */}
      {/* <Progress /> */}
      <Category {...overview} />
      <Category {...javascriptfundamentals} />
      <Category {...webDevelopmentFundamentals} />
      <Category {...frontendGuide} />
      <Category {...backendGuide} />
      <Category {...projectPhase} />
      <Category {...productionPhase} />
      {/* <Category /> */}
    </div>
  );
};

export default fullstackcourse;
