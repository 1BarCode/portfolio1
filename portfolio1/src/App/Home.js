import React from "react";

import Hero from "../components/Hero/Hero";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Projects from "../components/Projects/Projects";
import Tech from "../components/Technologies/Tech";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
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
      <Tech />
      <About />
      <Footer />
    </Layout>
  );
};

export default Home;
