import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle style={{fontSize: "4rem"}}>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of technologies in web development world.
      from Back-end to Design
    </SectionText>
    <List>
      <ListItem>
         <DiReact size="3rem" />
         <ListContainer>
           <ListTitle>Front-End</ListTitle>
           <ListParagraph>
             Experience with <br />
             React.js
           </ListParagraph>
         </ListContainer>
      </ListItem>
      <ListItem>
         <DiFirebase size="3rem" />
         <ListContainer>
           <ListTitle>Back-End</ListTitle>
           <ListParagraph>
             Experience with <br />
             Node.js and MongoDB
           </ListParagraph>
         </ListContainer>
      </ListItem>
      <ListItem>
         <DiZend size="3rem" />
         <ListContainer>
           <ListTitle>UI/UX</ListTitle>
           <ListParagraph>
             Experience with <br />
             tools like Figma and Canva
           </ListParagraph>
         </ListContainer>
      </ListItem>
    </List>
    <SectionDivider sstyle={{marginTop: "10%", marginBottom: "10%"}} />
  </Section>
  
);

export default Technologies;
 