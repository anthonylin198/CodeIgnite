import React from "react";

import {
  CardContainer,
  ContentContainer,
  ContentTitle,
  ContentP,
  ButtonContainer,
  Progress,
  Button,
} from "./CardElements";

const Card = () => {
  return (
    <CardContainer>
      <ContentContainer>
        <ContentTitle>Card Title</ContentTitle>
        <ContentP>This is a paragraph</ContentP>
      </ContentContainer>
      <ButtonContainer>
        <Progress>This is progress</Progress>
        <Button>Her button</Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;
