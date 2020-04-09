import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { ContactLinksList } from '../components/ContactLinks/ContactLinksList';
import { SkillsList } from '../components/Skills/SkillsList';
import { Header as SectionHeader } from '../components/Section/Header';
import { Section } from '../components/Section/Section';
import { ProjectAbstract } from '../components/ProjectAbstract/Abstract';
import { Link } from 'react-router-dom';

// const stackColors = [
//   'base-yellow', 
//   'base-blue', 
//   'base-light-blue',
//   'base-white',
// ];

const stackColors = [
  '#F2CD88', '#88C1F2', '#C4E1F2', '#FFFFFF'
]

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
    link: '/projects/fusion',
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
    link: '/projects/magnity',
  },
  {
    project: 'Magnity Marketing Website',
    folderName: 'MagnityWebsite',
    skills: [
      'Front-end Development',
      'Design',
    ],
    technologies: ['Laravel', 'Sketch', 'Amazon Web Services'],
    link: '/projects/magnity-marketing',
  },
  {
    project: 'Boardingware',
    folderName: 'Boardingware',
    skills: [
      'Front-end Development',
    ],
    technologies: ['Sass', 'JADE', 'BEM'],
    link: '/projects/boardingware',
  },
  {
    project: 'Online Portfolio',
    folderName: 'Boardingware',
    skills: [
      'Front-end Development',
      'Design',
    ],
    technologies: ['React', 'Sketch'],
    link: '/projects/portfolio',
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
    link: '/projects/ljhooker',
  },
  {
    project: 'Pasifika TV',
    folderName: 'Boardingware',
    skills: [
      'Front-end Development',
      'Back-end Development',
    ],
    technologies: ['Drupal 7'],
    link: '/projects/pasifikatv',
  },
];

const architecture = [
  {
    project: 'Portfolio',
    folderName: 'Boardingware',
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Rhinoceros 3d',
      'AutoCad',
      'Adobe Indesign'
    ],
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Rhinoceros 3d', '3DS Max', 'AutoCad', 'Adobe InDesign'],
    link: '/architecture/portfolio',
  },
  {
    project: 'Ironbank Article',
    folderName: 'Boardingware',
    skills: [
      'Adobe Illustrator',
      'Adobe Indesign'
    ],
    technologies: ['Adobe Illustrator', 'Adobe InDesign'],
    link: '/architecture/ironbank',
  }
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

      <Section className="section--margin-bottom" render={ visible => (
        <>
          <SectionHeader subheading="What I've worked on."
                         heading="Selected Works & Projects"
                         visible={ visible } />
          <ul className="reset-list" id="projects">
            { projects.map((project, key) => (
              <li role="article" key={ key }>
                <Link to={ project.link } >
                  <ProjectAbstract {...project} />
                </Link>
              </li>
            )) }
          </ul>
        </>
      )} />

      <Section render={ visible => (
        <>
          <SectionHeader subheading="Design Background."
                         heading="Architecture"
                         visible={ visible } />
          <ul className="reset-list" id="architecture">
            { architecture.map((project, key) => (
              <li role="article" key={ key }>
                <Link to={ project.link } >
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

