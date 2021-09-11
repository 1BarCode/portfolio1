import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";

const About = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I graduated university with a degree in English in 2016 and have worked
        in the insurance industry for several years. In 2021, I decided to
        change my career trajectory so I challenged myself to learn software
        development. I am a self-taught developer with a passion for learning
        new technologies. My interests include (but not limited to) financial
        investments, emerging tech, IoT, artificial intelligence, self-driving
        cars and sustainable energy. <br />
        I'm always open to new opportunities. If you'd like to chat, below are
        several ways you can contact me.
      </SectionText>
    </Section>
  );
};

export default About;
