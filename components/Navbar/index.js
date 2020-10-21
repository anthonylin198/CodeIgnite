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
              <NavLinksR href="/content">Content</NavLinksR>
            </NavItem>
            <NavBtn>
              <NavBtnLink href="signup">Sign up</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default index;
