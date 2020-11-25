import React from "react";
import Link from "next/link";

// import imgL1Logo from "../../assets/image/png/l1-logo.png";
import styled from "styled-components";

// import imgL1Logo from "../../assets/image/png/CodeIgnite.png";
import imgL1Logo from "../../assets/image/png/Logo.png";
import imgL1LogoWhite from "../../assets/image/png/logo-white.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          // <img src={imgL1LogoWhite} alt="" />
          <h4 style={{ color: "white" }}>CodeIgnite</h4>
        ) : (
          // <img src={imgL1Logo} alt="" />
          <h4 style={{ color: "black" }}>CodeIgnite</h4>
        )}
      </a>
    </Link>
  );
};

export default Logo;
