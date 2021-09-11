import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Project</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, video, demo }) => (
            <BlogCard key={id}>
              {/* <Img /> */}
              <iframe
                width="400"
                height="225"
                src="https://www.youtube.com/embed/0lZjYRWqVCU"
                title="YouTube video player"
                frameborder="5"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <TagList>
                  {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={video} target="_blank">
                  Video
                </ExternalLinks>
                <ExternalLinks href={demo} target="_blank">
                  Demo
                </ExternalLinks>
                <ExternalLinks href={source} target="_blank">
                  Source Code
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
