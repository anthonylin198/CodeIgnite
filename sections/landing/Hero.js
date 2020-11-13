import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import ScrollButton from "../../components/Core/ScrollButton";

import GlobalContext from "../../context/GlobalContext";

import { device } from "../../utils";
import svgHeroShape from "../../assets/image/svg/hero-shape-svg.svg";
// import imgL1HeroPhone from "../../assets/image/png/landing1-hero-phone.png";
import imgL1HeroPhone from "../../assets/image/png/content-img1--mobile.png";

const ShapeTopLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;

const TopCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  top: 14%;
  left: 0;
  @media ${device.md} {
    left: -13%;
  }
  @media ${device.lg} {
    left: 2%;
  }
`;

// create a column that won't appear on mobile
const ColRight = styled(Col)`
  display: none;
  @media ${device.sm} {
    display: inline;
  }
`;

const BottomCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  bottom: 12%;
  right: 0;
  @media ${device.md} {
    right: -13%;
  }
  @media ${device.lg} {
    right: -5%;
  }
  @media ${device.xl} {
    right: -33%;
  }
`;

const ImgRight = styled.img`
  max-width: 50%;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <div className="pt-5"></div>
        <ShapeTopLeft>
          <img src={svgHeroShape} alt="" className="img-fluid" />
        </ShapeTopLeft>
        <Container>
          <Row className="justify-content-center align-items-center">
            <ColRight lg="5" md="8" sm="9" className="order-lg-2">
              <div className="text-center text-lg-right position-relative">
                <div
                  className="img-main"
                  data-aos="fade-down"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  <ImgRight src={imgL1HeroPhone} alt="" />
                </div>

                <TopCard
                  bg="secondary"
                  p="18px"
                  borderRadius={8}
                  className="d-flex align-items-center"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  <Box
                    width="30px"
                    minWidth="30px"
                    height="30px"
                    minHeight="30px"
                    bg="warning"
                    color="light"
                    borderRadius="50%"
                    className="d-flex align-items-center justify-content-center"
                    mr={3}
                  >
                    <i className="icon icon-check-2"></i>
                  </Box>
                  <Text color="light" fontSize={2} lineHeight="1.25">
                    Integrated Coding Environment
                  </Text>
                </TopCard>

                <BottomCard
                  bg="warning"
                  p="18px"
                  borderRadius={8}
                  className="d-flex align-items-center text-left"
                  data-aos="fade-left"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  <Box
                    width="30px"
                    minWidth="30px"
                    height="30px"
                    minHeight="30px"
                    bg="secondary"
                    color="light"
                    borderRadius="50%"
                    className="d-flex align-items-center justify-content-center"
                    mr={3}
                  >
                    <i className="icon icon-check-2"></i>
                  </Box>
                  <Text color="dark" fontSize={2} lineHeight="1.25">
                    Check Your answers Live
                  </Text>
                </BottomCard>
              </div>
            </ColRight>
            <Col lg="7" className="order-lg-1">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero">Remote Coding Courses</Title>
                  <Text mb={4}>
                    Our computer science programs set students up to become
                    autonomous engineers with college level portfolios
                  </Text>
                  <div className="d-flex flex-column align-items-start">
                    <ScrollButton
                      to="feature"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      mb={3}
                    >
                      Learn More
                    </ScrollButton>
                    <a
                      href="/"
                      className="text-decoration-none"
                      onClick={openVideoModal}
                    >
                      <Box color="secondary">
                        <i className="icon icon-triangle-right-17-2"></i> Watch
                        the intro video
                      </Box>
                    </a>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
