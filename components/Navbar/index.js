import React from "react";
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
  return (
    <>
      <Nav>
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
                <NavLinksR>Content</NavLinksR>
              </Link>
            </NavItem>
            <NavBtn>
              <Link href="signup">
                <NavBtnLink href="signup">Sign up Now</NavBtnLink>
              </Link>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default index;
