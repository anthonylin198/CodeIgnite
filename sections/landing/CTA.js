import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text, InputGroup } from "../../components/Core";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CTA = () => {
  return (
    <>
      {/* <!-- CTA section --> */}
      <Box bg="light" className="position-relative" py={[4, null, null, 5, 6]}>
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="8">
              <Box className="text-center">
                <Title color="dark">Check Out Our Curriculum</Title>
                <Text mb={4} color="dark" opacity={1}>
                  Our curriculum is designed to develop an entrepreneurial
                  mindset to succeed in today's job market
                </Text>
                <div className="d-flex flex-column align-items-center pt-3">
                  <FormContainer>
                    <Button linkTo="overview" ml="2">
                      Go Now
                    </Button>
                  </FormContainer>
                </div>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default CTA;
