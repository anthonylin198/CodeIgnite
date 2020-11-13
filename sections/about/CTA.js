import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text } from "../../components/Core";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <Box bg="light" className="position-relative" py={[4, null, null, 5, 6]}>
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7">
            <Box className="text-center">
              <Title color="dark">Try the Course for Free</Title>
              <Text mb={4} color="dark" opacity={0.7}>
                Get the first section, Javascript Fundamentals, for free!
              </Text>
              <div className="d-flex flex-column align-items-center pt-3">
                {/* Go to the button and add the title link thing */}
                <Button linkTo="fullstackcourse" mb={2}>
                  Start Now
                </Button>

                {/* <Text
                  variant="small"
                  fontSize={"14px"}
                  color="dark"
                  opacity={0.7}
                >
                  No credit card required
                </Text> */}
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  </>
);

export default CTA;
