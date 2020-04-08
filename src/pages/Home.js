import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { ContactLinksList } from '../components/ContactLinks/ContactLinksList';
import { SkillsList } from '../components/Skills/SkillsList';
import { Header as SectionHeader } from '../components/Section/Header';
import { Section } from '../components/Section/Section';
import { ProjectAbstract } from '../components/ProjectAbstract/Abstract';
import { Link } from 'react-router-dom';

const stackColors = [
  'base-yellow', 
  'base-blue', 
  'base-light-blue',
  'base-white',
];

const breadcrumbs = [{
  link: '#',
  title: 'Erika Kishi'
}];

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
  return (
    <>
      <PageHeader stackColors={ stackColors }
                  title="Full Stack Developer & Designer"
                  breadcrumbs={ breadcrumbs }>
        <ContactLinksList />
      </PageHeader>

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
          <ul className="reset-list" id="projects">
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

