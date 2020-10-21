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
              <Link href="/about">
                <NavLinksR>About</NavLinksR>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/content">
                <NavLinksR>Content</NavLinksR>
              </Link>
            </NavItem>
            <NavBtn>
              <Link href="signup">
                <NavBtnLink href="signup">Sign up Noww</NavBtnLink>
              </Link>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default index;
