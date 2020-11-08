import styled from "styled-components";

export const CategoryContainer = styled.div`
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export const CategoryContent = styled.div`
  z-index: 3;
  width: 80vw;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const CategoryH1 = styled.h1`
  color: #fff;
  font-size: 32px;
  /* text-align: center; */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  /* @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  } */
`;

// need to create each card to map
