import React from "react";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Div1>
      <Div2>
        <li>
          <a href="#projects">
            <NavLink>Projects</NavLink>
          </a>
        </li>
        <li>
          <a href="#tech">
            <NavLink>Tech Stack</NavLink>
          </a>
        </li>
        <li>
          <a href="#about">
            <NavLink>About</NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
