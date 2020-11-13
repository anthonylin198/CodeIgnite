import React, { useState } from "react";

import Category from "../components/CoursePages/Category";
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
      <HeroCenter title="Full-Stack Course">
        Modern Full Stack Web Development
      </HeroCenter>
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
