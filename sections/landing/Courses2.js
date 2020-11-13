import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title } from "../../components/Core";
import PostCard from "../../components/PostCard";
import Button from "../../components/Core/Button";
import styled from "styled-components";

// import imgCase1 from "../../assets/image/jpeg/case-card-img.jpg";
import imgCase1 from "../../public/images/student1.jpg";
// import imgCase2 from "../../assets/image/jpeg/case-card-img-2.jpg";
import imgCase2 from "../../public/images/interview.jpg";
// import imgCase3 from "../../assets/image/jpeg/case-card-img-3.jpg";
// import imgBrand1 from "../../assets/image/jpeg/case-card-brand-img.jpg";
// import imgBrand2 from "../../assets/image/jpeg/case-card-brand-img-2.jpg";
// import imgBrand3 from "../../assets/image/jpeg/case-card-brand-img-3.jpg";

const NewTitle = styled(Title)`
  padding-left: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  max-height: 100px;
  max-width: 100px;
`;

const CaseList = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative">
      <Container>
        <Row className="align-items-center justify-content-center">
          <NewTitle variant="hero">Our Featured Courses</NewTitle>
          <Col lg="5" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase1}
              // imgBrand={imgBrand1}
              title="Full- Stack Course"
              linkTitle="fullstack"
            >
              Start from the fundamentals of Javascript to building full-stack
              applications
              <br></br>
              <ButtonContainer>
                <Button linkTo="fullstack">Learn More</Button>
              </ButtonContainer>
            </PostCard>
          </Col>
          <Col lg="5" className="mb-5 mb-lg-0">
            <PostCard
              img={imgCase2}
              // imgBrand={imgBrand2}
              title="Coding Interview Course"
              linkTitle="codinginterview"
            >
              Learn the key concepts necessary to pass the dreaded coding
              interview
              <br></br>
              <ButtonContainer>
                <Button linkTo="codinginterview">Learn More</Button>
              </ButtonContainer>
            </PostCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CaseList;
