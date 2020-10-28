import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkR,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarElements";
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href="/about" onClick={toggle}>
            <SidebarLinkR>About</SidebarLinkR>
          </Link>
          <Link href="/fullstack" onClick={toggle}>
            <SidebarLinkR>fullstack course</SidebarLinkR>
          </Link>
          <Link href="/coding interview" onClick={toggle}>
            <SidebarLinkR>coding interview course</SidebarLinkR>
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href="/signin" onClick={toggle}>
            <SidebarRoute>Sign In</SidebarRoute>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
