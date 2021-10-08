import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'The complete web devlopment bootcamp.'},
  { number: 1000, text: 'Modern web html and css.', },
  { number: 1900, text: 'Google Digital Garage.', },
  { number: 5000, text: 'Advance- deep drive in c++.', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle style={{fontSize: "4rem"}}>Licenses & Certifications</SectionTitle>
    <Boxes>
      {data.map((card,index)=>
      (
        <Box key={index}>
       
        <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
