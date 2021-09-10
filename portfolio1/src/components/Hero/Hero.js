import React from "react";

import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          &lt;Hello World /&gt; <br />
          My Name is Tai
        </SectionTitle>
        <SectionText>
          I'm a fullstack software developer focused on creating awesome web
          applications.
        </SectionText>
        <a>
          <Button>Download My Resume</Button>
        </a>
      </LeftSection>
    </Section>
  );
};

export default Hero;
