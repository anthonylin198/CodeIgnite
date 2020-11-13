import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Title, Box, Text, Span } from "../Core";
import { device } from "../../utils";

const Card = styled(Box)`
  border-radius: 10px 10px;
  border: 1px solid #eae9f2;
  transition: 0.4s;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  }
`;

const CustomCard = styled(Card)`
  max-height: 200px;
  min-width: 150px;
  margin-right: 1rem;
  background-color: white;

  @media ${device.md} {
    min-height: 200px;
    min-width: 200px;
    margin-right: 1rem;
  }
  @media ${device.lg} {
    min-height: 300px;
    min-width: 300px;
    margin-right: 1rem;
  }
  @media ${device.xl} {
    min-height: 300px;
    min-width: 300px;
    max-width: 300px;
    margin-right: 1rem;
  }
`;

const CardText = styled(Box)`
  height: 100%;
  padding: 20px;
  background-color: #ffcccb;
  @media ${device.md} {
    height: 50%;
  }
`;
const CardText2 = styled(Box)`
  display: none;
  /* padding: 20px; */
  @media ${device.md} {
    display: block;
    padding: 20px;
  }
`;

const TitleStyled = styled(Title)`
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const ProgressBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModuleCard = ({
  horizontal = false,
  img,
  imgBrand,
  preTitle,
  description,
  title,
  children,
  readMore,
  linkTitle,
  ...rest
}) => (
  <CustomCard
    className={horizontal ? "d-flex flex-column flex-md-row" : ""}
    {...rest}
  >
    <CardText>
      {preTitle && (
        <Text fontSize={2} lineHeight={1.75} mb="14px">
          {preTitle}
        </Text>
      )}

      <Link href="/">
        <a>
          <TitleStyled variant="card" mb="14px">
            {title}
          </TitleStyled>
        </a>
      </Link>
      <Text fontSize={2} lineHeight={1.75} mb="16px">
        {children}
      </Text>
      {readMore && (
        <Box>
          <Link href="/">
            <a>
              <Span color="primary">Continue Reading</Span>
            </a>
          </Link>
        </Box>
      )}
    </CardText>
    {/* div not on mobile */}
    <CardText2>
      <Text fontSize={2} lineHeight={1.75} mb="14px">
        {description}
      </Text>
      <ProgressBox>
        <p>(0/7) Complete</p>
        <button>Continue</button>
      </ProgressBox>
    </CardText2>
  </CustomCard>
);

export default ModuleCard;
