import React from "react";

import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, NavLink } from "./HeroStyles";

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          &lt;Hello World /&gt; <br />
          My name is Tai
        </SectionTitle>
        <SectionText>
          I'm a fullstack software developer focused on creating responsive,
          scalable and awesome web applications.
        </SectionText>
        <SectionText>
          I am actively seeking a position in tech, please reach
          out to me{" "}
          <NavLink href="#footer">
            <strong>here</strong>
          </NavLink>
          .
        </SectionText>
        <Button>
          <a
            href="https://drive.google.com/file/d/1SjmjM2wJCpK5Y3Olm5Phu_QFGIjO1pyg/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download My Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
