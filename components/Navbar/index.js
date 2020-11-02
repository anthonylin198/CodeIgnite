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
import { useRouter } from "next/router";

const index = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href="/">
            <NavLogo>CodeIgnite</NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link href="/">
                <NavLinksR>Home</NavLinksR>
              </Link>
              {/* <Link href="/about">
                <NavLinksR>About</NavLinksR>
              </Link> */}
            </NavItem>
            <NavItem className={router.asPath == "/fullstack" ? "active" : ""}>
              <Link href="/fullstack">
                <NavLinksR>Full Stack Course</NavLinksR>
              </Link>
            </NavItem>
            <NavItem
              className={router.asPath == "/codinginterview" ? "active" : ""}
            >
              <Link href="/codinginterview">
                <NavLinksR>Tech Interview Course</NavLinksR>
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
