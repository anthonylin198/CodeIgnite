import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  SiteHeader,
  MobileLogin,
  ToggleButton,
  Menu,
  MenuDropdown,
} from "./HeaderElements";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import { Button } from "../Core";
import NestedMenu from "../NestedMenu";
import Logo from "../Logo";
import { menuItems } from "./menuItems";

const GuestMenu = ({ isDark = false }) => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <SiteHeader
        className={`sticky-header ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header" : ""
        }`}
        dark={isDark ? 1 : 0}
      >
        <Container fluid>
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light">
            <Link href="signin">
              <MobileLogin>Login</MobileLogin>
            </Link>
            {/* <!-- Brand Logo--> */}
            <div className="brand-logo">
              <Logo white={isDark} />
            </div>

            {/* Insert login here */}
            <div className="collapse navbar-collapse">
              <div className="navbar-nav ml-lg-auto mr-3">
                <Menu
                  className="navbar-nav d-none d-lg-flex"
                  dark={isDark ? 1 : 0}
                >
                  {menuItems.map(
                    (
                      { label, isExternal = false, name, items, ...rest },
                      index
                    ) => {
                      const hasSubItems = Array.isArray(items);
                      return (
                        <React.Fragment key={name + index}>
                          {/* Conditional */}
                          {hasSubItems ? (
                            <li className="nav-item dropdown" {...rest}>
                              <a
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                href="/#"
                                onClick={(e) => e.preventDefault()}
                              >
                                {label}
                              </a>
                              <MenuDropdown
                                className="menu-dropdown dropdown-right"
                                dark={isDark ? 1 : 0}
                              >
                                {items.map((subItem, indexSub) => {
                                  const hasInnerSubItems = Array.isArray(
                                    subItem.items
                                  );
                                  return (
                                    <React.Fragment
                                      key={subItem.name + indexSub}
                                    >
                                      {hasInnerSubItems ? (
                                        <li className="drop-menu-item dropdown">
                                          <a
                                            className="dropdown-toggle"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                            href="/#"
                                            onClick={(e) => e.preventDefault()}
                                          >
                                            {subItem.label}
                                          </a>
                                          <MenuDropdown
                                            className="menu-dropdown dropdown-right"
                                            dark={isDark ? 1 : 0}
                                          >
                                            {subItem.items.map(
                                              (itemInner, indexInnerMost) => (
                                                <li
                                                  className="drop-menu-item"
                                                  key={
                                                    itemInner.name +
                                                    indexInnerMost
                                                  }
                                                >
                                                  {itemInner.isExternal ? (
                                                    <a
                                                      href={`${itemInner.name}`}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                    >
                                                      {itemInner.label}
                                                    </a>
                                                  ) : (
                                                    <Link
                                                      href={`/${itemInner.name}`}
                                                    >
                                                      <a>{itemInner.label}</a>
                                                    </Link>
                                                  )}
                                                </li>
                                              )
                                            )}
                                          </MenuDropdown>
                                        </li>
                                      ) : (
                                        <li className="drop-menu-item">
                                          {subItem.isExternal ? (
                                            <a
                                              href={`${subItem.name}`}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {subItem.label}
                                            </a>
                                          ) : (
                                            <Link href={`/${subItem.name}`}>
                                              <a>{subItem.label}</a>
                                            </Link>
                                          )}
                                        </li>
                                      )}
                                    </React.Fragment>
                                  );
                                })}
                              </MenuDropdown>
                            </li>
                          ) : (
                            <li className="nav-item" {...rest}>
                              {isExternal ? (
                                <a
                                  className="nav-link"
                                  href={`${name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {label}
                                </a>
                              ) : (
                                <Link href={`/${name}`}>
                                  <a
                                    className="nav-link"
                                    role="button"
                                    aria-expanded="false"
                                  >
                                    {label}
                                  </a>
                                </Link>
                              )}
                            </li>
                          )}
                        </React.Fragment>
                      );
                    }
                  )}
                </Menu>
              </div>
            </div>
            <div className="header-btns ml-auto ml-lg-0 d-none d-md-block">
              {/* Conditional, would just change to Welcome, Annthony drop down instead of a button if logged in */}
              <Button
                linkTo="signin"
                size="sm"
                css={`
                  font-size: 16px !important;
                  min-width: 141px !important;
                  height: 45px !important;
                `}
              >
                Login / Signup
              </Button>
            </div>
            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={isDark ? 1 : 0}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu menuItems={menuItems} />
      </Offcanvas>
    </>
  );
};

export default GuestMenu;
