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

const Card = ({ name, description }) => {
  return (
    <CardContainer>
      <ContentContainer>
        <ContentTitle>{name}</ContentTitle>
        <ContentP>{description}</ContentP>
      </ContentContainer>
      <ButtonContainer>
        <Progress>This is progress</Progress>
        <Button>Continue</Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;
