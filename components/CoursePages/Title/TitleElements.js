import styled from "styled-components";

export const TitleContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  z-index: 1;
`;

export const TitleContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 750px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
