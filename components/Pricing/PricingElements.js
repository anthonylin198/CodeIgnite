import styled from "styled-components";

export const PricingSection = styled.div`
  margin-top: -14rem;
  padding: 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  @media screen and (max-width: 960px) {
    margin-top: -2rem;
  }
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  text-align: center;
  color: black;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  /* height: fit-content; */
  width: 25vw;
  height: 600px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    height: 700px;
    width: 95%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 500px; */
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const Img = styled.img`
  /* padding-top: 2rem; */
  width: 100%;
  height: 50%;
  object-fit: cover;
  object-position: top;
  background-color: #fff;
`;

export const PricingCardIcon = styled.div`
  /* margin: 24px 0; */
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  text-align: left;
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 1.7;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  /* margin-bottom: 10px; */
  margin-left: none;
`;
