import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Text } from "../../components/Core";

const SectionStyled = styled(Section)`
  background-color: #5454d4;
`;

const Hero = ({ title, children, ...rest }) => {
  return (
    <>
      <Section
        bg="ash"
        pt={["120px!important", null, "190px!important"]}
        pb={["50px!important", null, "180px!important"]}
        {...rest}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8">
              <div>
                <Title variant="hero" style={{ color: "white" }}>
                  {title}
                </Title>
                <Text style={{ color: "white" }}>{children}</Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};
export default Hero;
