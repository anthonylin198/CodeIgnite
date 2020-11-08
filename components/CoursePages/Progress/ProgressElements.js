import styled from "styled-components";

export const ProgressContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  z-index: 1;
`;

export const ProgressLabel = styled.h2`
  color: black;
  font-size: 32px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
