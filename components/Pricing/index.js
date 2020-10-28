import React from "react";
import { LinkButton } from "../ButtonElement";

import Link from "next/link";

import {
  PricingSection,
  PricingWrapper,
  Img,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./PricingElements";

const img = require("../../public/images/react.svg");
const img2 = require("../../public/images/coding.svg");

function Pricing() {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Our Online Coding Programs</PricingHeading>
        <PricingContainer>
          <PricingCard>
            <Img src={img} />
            <PricingCardInfo>
              <PricingCardPlan>Full Stack Course</PricingCardPlan>
              <PricingCardLength>
                The Full stack course is designed for students to learn the
                fundamentals of Javascript to being able to create applications
                ranging from games to chat apps
              </PricingCardLength>
              <Link href="fullstack">
                <LinkButton>Learn More</LinkButton>
              </Link>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard>
            <Img src={img2} />
            <PricingCardInfo>
              <PricingCardPlan>Tech Interview</PricingCardPlan>
              <PricingCardLength>
                Coding Interview Course is designed to take a student from
                fundamentals to having the ability to pass the technical coding
                interview. asdasdasdasdasd
              </PricingCardLength>
              <Link href="codinginterview">
                <LinkButton>Learn More</LinkButton>
              </Link>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
}
export default Pricing;
