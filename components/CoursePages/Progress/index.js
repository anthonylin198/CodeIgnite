import React from "react";

import {
  ProgressContainer,
  ProgressLabel,
  ProgressBar,
} from "./ProgressElements";
const Progress = () => {
  return (
    <ProgressContainer>
      <ProgressLabel>Your Progress</ProgressLabel>
      <ProgressLabel>0/30 sections complete</ProgressLabel>
    </ProgressContainer>
  );
};

export default Progress;
