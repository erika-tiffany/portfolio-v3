import React, { useState } from 'react';
import { Stack } from '../components/Stack/Stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactLinksList } from '../components/ContactLinks/ContactLinksList';
import { SkillsList } from '../components/Skills/SkillsList';
import { SectionHeader } from '../components/SectionHeader';
import { Section } from '../components/Section';

const stackColors = [
  'base-yellow', 
  'base-blue', 
  'base-light-blue',
  'base-white',
];

const skills = [
  { skill: 'Back-end Development', competency: 95 },
  { skill: 'Front-end Development', competency: 70 },
  { skill: 'API Integration', competency: 80 },
  { skill: 'AWS Architecture', competency: 35 },
  { skill: 'Design', competency: 50 },
];

export const Home = (props) => {
  const [stackAnimated, setStackAnimated] = useState(false);

  return (
    <>
      <Stack colors={ stackColors }
             handleChangeStackAnimated={ () => setStackAnimated(true) }/>
      <Header title="Full Stack Developer & Designer" 
              breadcrumb={ ['Erika Kishi'] } 
              animate={ stackAnimated }>
        <ContactLinksList />
      </Header>

      <Section render={ visible => (
        <>
          <SectionHeader subheading="Hi, I'm a Kiwi that enjoys dipping my feet in all aspects of development."
                         heading="What I Can Do"
                         visible={ visible } />
          <SkillsList skills={ skills }
                      visible={ visible } />
        </>
      )} />

      <Footer />
    </>
  );
}

