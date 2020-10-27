import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksR,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Link from "next/link";

const index = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href="/">
            <NavLogo>Home</NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
              {/* <Link href="/about">
                <NavLinksR>About</NavLinksR>
              </Link> */}
            </NavItem>
            <NavItem>
              <Link href="/content">
                <NavLinksR>Full Stack Course</NavLinksR>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/content">
                <NavLinksR>Tech Interview Course</NavLinksR>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/content">
                <NavLinksR>Content</NavLinksR>
              </Link>
            </NavItem>
            <NavBtn>
              <Link href="signin">
                <NavBtnLink>Sign up Now</NavBtnLink>
              </Link>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default index;
