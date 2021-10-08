import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>

  <LeftSection  >
    <SectionTitle main center style={{fontSize:"5rem", lineHeight: "1.2"}}>

Hello, I'm  Shubham Joshi <br />
I build things for the web

    </SectionTitle>
<SectionText>
I'm a full-stack web developer, MA specialzing in building expectional,high-quality websites and applications
</SectionText>
<Button onClick={() => window.location = "https://www.linkedin.com/in/shubham-joshi-005a721a4/"}>Learn More</Button>
  </LeftSection>


  </Section>
);

export default Hero;