import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";
import { device } from "../../utils";

import imgVideo from "../../assets/image/jpeg/video-image-2.jpg";

const IconButton = styled(Box)`
  cursor: pointer;
  font-size: 22px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${({ theme }) => theme.colors.light};
  width: 64px;
  height: 64px;
  @media ${device.sm} {
    width: 100px;
    height: 100px;
  }
  @media ${device.md} {
    width: 124px;
    height: 124px;
  }
`;

const BGSection = styled(Section)`
  background-color: #f9f9f9;
`;
const Content = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      <BGSection>
        <Container>
          <Row className="justify-content-center pb-5">
            <Title variant="hero" className="mb-0">
              The Learning Portal
            </Title>
          </Row>
          <Row className="justify-content-center  mb-5">
            <Text>Check out</Text>
          </Row>

          <Box borderRadius={10} className="position-relative overflow-hidden">
            <img src={imgVideo} alt="" className="img-fluid" />
            <IconButton onClick={openVideoModal}>
              <i className="icon icon-triangle-right-17-2"></i>
            </IconButton>
          </Box>
        </Container>
      </BGSection>
    </>
  );
};

export default Content;
