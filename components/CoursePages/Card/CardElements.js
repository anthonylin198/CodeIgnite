/*
    <CardContainer>
      <ContentContainer>
        <ContentTitle></ContentTitle>
        <ContentP></ContentP>
      </ContentContainer>
      <ButtonContainer>
        <Progress></Progress>
        <Button></Button>
      </ButtonContainer>
    </CardContainer>


*/

import styled from "styled-components";

export const CardContainer = styled.div`
  height: 20vh;
  width: 20vw;
  padding: 20px 20px;
  margin-right: 10px;
  background: white;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 95%;
`;

export const ContentTitle = styled.h1`
  color: black;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const ContentP = styled.p`
  color: black;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  align-items: right;
  align-items: flex-end;
`;

export const Progress = styled.h3`
  text-align: right;
  color: black;
`;

export const Button = styled.button`
  background-color: red;
  float: right;
`;
