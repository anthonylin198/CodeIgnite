import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import ScrollButton from "../../components/Core/ScrollButton";

const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box width={"100%"} bg="light" p="30px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
        css={`
          background-color: ${({ theme, color }) =>
            rgba(theme.colors[color], 0.1)};
        `}
      >
        <i className={`icon ${iconName}`}></i>
      </Box>
      <div>
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={500}
          letterSpacing={-0.75}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize={2} lineHeight={1.75}>
          {children}
        </Text>
      </div>
    </div>
  </Box>
);

const Feature = () => (
  <>
    <Section id="feature" bg="ash">
      <Container>
        <Row className="align-items-center">
          <Col
            md="8"
            lg="6"
            className="offset-lg-1 pl-lg-5 order-lg-2"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Box>
              <Title color="light">Creating Problem Solvers.</Title>
              <Text color="light" opacity={0.9}>
                Our curriculum is designed to provide students with an
                entrepreneurial mindset and the technical ability to build
                scalable software solutions to bring their ideas to life
              </Text>
              <ScrollButton
                to="courses"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                mt={4}
              >
                Get Started
              </ScrollButton>
            </Box>
          </Col>
          <Col md="8" lg="5" className="order-lg-1 mt-5 mt-lg-0">
            <div>
              <Row className="justify-content-center">
                <Col
                  md="12"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="primary"
                    iconName="icon-layout-11"
                    title="Integrated Portal"
                  >
                    Integrated learning environment to get the most out of it
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="ash"
                    iconName="icon-sidebar-2"
                    title="Awesome Community"
                  >
                    Learn and connect with like-minded individuals to build
                    innovative prouducts
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="dark"
                    iconName="icon-voice-recognition-2"
                    title="Project-Based Learning"
                  >
                    Students will build real world projects to build up their
                    portfolio
                  </FeatureCard>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
