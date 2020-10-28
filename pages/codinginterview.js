import React from "react";

import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
const codinginterview = () => {
  return (
    <div>
      <InfoSection {...homeObjTwo} />
    </div>
  );
};

export default codinginterview;
