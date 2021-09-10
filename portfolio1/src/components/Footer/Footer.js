import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:408-644-8403">408-644-8403</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:taihuynh14@gmail.com">
            taihuynh14@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Other</LinkTitle>
          <LinkItem>
            <SocialIconsContainer>
              {/* <CompanyContainer>
            <Slogan>Social Media</Slogan>
          </CompanyContainer> */}
              <SocialContainer>
                <SocialIcons href="https://github.com/1BarCode" target="_blank">
                  <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons
                  href="https://linkedin.com/in/tai-huynh-a58493187"
                  target="_blank"
                >
                  <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons
                  href="https://twitter.com/taithuynh"
                  target="_blank"
                >
                  <AiFillTwitterCircle size="3rem" />
                </SocialIcons>
              </SocialContainer>
            </SocialIconsContainer>
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
