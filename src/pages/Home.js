import React, { useState } from 'react';
import { Stack } from '../components/Stack/Stack';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactLinksList } from '../components/ContactLinks/ContactLinksList';
import { SkillsList } from '../components/Skills/SkillsList';
import { SectionHeader } from '../components/SectionHeader';
import { Section } from '../components/Section';
import { ProjectAbstract } from '../components/ProjectAbstract/Abstract';
import { Link } from 'react-router-dom';

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

const projects = [
  {
    project: 'Fusion Entertainment',
    folderName: 'FusionEntertainment',
    skills: [
      'Back-end Development',
      'API Integration',
    ],
    technologies: ['Craft CMS'],
  },
  {
    project: 'Magnity Web Application',
    folderName: 'MagnityApp',
    skills: [
      'Front-end Development',
      'Back-end Development',
      'API Integration',
      'AWS Architecture',
      'Design'
    ],
    technologies: ['Laravel', 'Vue.js', 'Sketch', 'Amazon Web Services'],
  },
  {
    project: 'Magnity Marketing Website',
    folderName: 'MagnityWebsite',
    skills: [
      'Front-end Development',
      'Design',
    ],
    technologies: ['Laravel', 'Sketch', 'Amazon Web Services'],
  },
  {
    project: 'Boardingware',
    folderName: 'Boardingware',
    skills: [
      'Front-end Development',
    ],
    technologies: ['Sass', 'JADE', 'BEM'],
  },
  {
    project: 'LJ Hooker NZ',
    folderName: 'Boardingware',
    skills: [
      'Front-end Development',
      'Back-end Development',
      'API Integration',
    ],
    technologies: ['Drupal 7'],
  },
  {
    project: 'Pasifika TV',
    folderName: 'Boardingware',
    skills: [
      'Front-end Development',
      'Back-end Development',
    ],
    technologies: ['Drupal 7'],
  },
]

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

      <Section 
        className="section--full-viewport"
        render={ visible => (
          <>
            <SectionHeader subheading="Hi, I'm a Kiwi that enjoys dipping my feet in all aspects of development."
                           heading="What I Can Do"
                           visible={ visible } />
            <SkillsList skills={ skills } visible={ visible } />
          </>
        )} 
      />

      <Section render={ visible => (
        <>
          <SectionHeader subheading="What I've worked on."
                         heading="Selected Works & Projects"
                         visible={ visible } />
          <ul className="reset-list">
            { projects.map((project, key) => (
              <li role="article" key={ key }>
                <Link to="/magnity">
                  <ProjectAbstract {...project} />
                </Link>
              </li>
            )) }
          </ul>
        </>
      )} />

      <Footer />
    </>
  );
}

