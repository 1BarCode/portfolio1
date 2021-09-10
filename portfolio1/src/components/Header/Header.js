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
          <NavLink href="#projects">Project</NavLink>
        </li>
        <li>
          <NavLink href="#tech">Tech Stack</NavLink>
        </li>
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/1BarCode" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://linkedin.com/in/tai-huynh-a58493187"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/taithuynh" target="_blank">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
