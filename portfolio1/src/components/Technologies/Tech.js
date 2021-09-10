import React from "react";
import { DiFirebase, DiReact, DiGitBranch } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechStyles";

const Tech = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <br />
      <SectionTitle>Tech Stack</SectionTitle>
      <SectionText>
        I work with a variety of technologies - here are some of my skills.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              HTML, CSS & JavaScript <br />
              ReactJS / Redux & Material-UI
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiGitBranch size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              NodeJS & ExpressJS
              <br />
              Authentication w/ JWT & OAuth
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Database</ListTitle>
            <ListParagraph>
              MongoDB <br />
              Mongoose & Schema Design
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Tech;
