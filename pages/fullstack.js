import React from "react";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";

const fullstack = () => {
  return (
    <div>
      <InfoSection {...homeObjOne} />
    </div>
  );
};

export default fullstack;
