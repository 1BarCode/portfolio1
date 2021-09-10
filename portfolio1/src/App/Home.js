import React from "react";

import Hero from "../components/Hero/Hero";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Projects from "../components/Projects/Projects";
import Layout from "../layout/Layout";
import { Section } from "../styles/GlobalComponents/index";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      {/* <Technologies /> */}
    </Layout>
  );
};

export default Home;
