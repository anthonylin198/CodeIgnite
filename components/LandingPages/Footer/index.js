import React from "react";

import { FaFacebook } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Learn More</FooterLinkTitle>
              <FooterLink>How it Works</FooterLink>
              <FooterLink>Testimonials</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink>How it Works</FooterLink>
              <FooterLink>Testimonials</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <WebsiteRights>CodeIgnite © 2020 All rights reserved</WebsiteRights>
        {/* <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>Home</SocialLogo>
            <WebsiteRights>CodeIgnite © 2020 All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia> */}
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
