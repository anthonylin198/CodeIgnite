import React from "react";
import { DemoContainer, DemoH1, BtnWrapper } from "./DemoElements";
import { LinkButton } from "../../Globals/ButtonElement";
import Link from "next/link";

const Demo = () => {
  return (
    <DemoContainer>
      <DemoH1>Try the Course</DemoH1>
      <BtnWrapper>
        <Link href="fullstackcourse">
          <LinkButton>Go to Course</LinkButton>
        </Link>
      </BtnWrapper>
    </DemoContainer>
  );
};

export default Demo;
