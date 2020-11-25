import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text, InputGroup } from "../../components/Core";

const CTA = () => {
  return (
    <>
      {/* <!-- CTA section --> */}
      <Box bg="light" className="position-relative" py={[4, null, null, 5, 6]}>
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="8">
              <Box className="text-center">
                <Title color="dark">Join the Waiting List</Title>
                <Text mb={4} color="dark" opacity={1}>
                  The learning portal is currently under development. Enter your
                  email to be notified upon completion
                </Text>
                <div className="d-flex flex-column align-items-center pt-3">
                  {/* Go to the button and add the title link thing */}
                  <InputGroup
                    icon={<i className="icon icon-email-84" />}
                    placeholder="Email address"
                    className="text-center"
                    pr="4.125rem"
                  />
                  <Button linkTo="overview" mb={2}>
                    Submit
                  </Button>
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
