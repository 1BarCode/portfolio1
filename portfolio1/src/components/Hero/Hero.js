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
          Hello World <br />
          My Name is Tai
        </SectionTitle>
        <SectionText>
          I'm a self-taught fullstack developer focused on creating awesome web
          applications.
        </SectionText>
        <Button>Download Resume</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
