import React from 'react';
import { slice } from 'lodash';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { ContactLinksList } from '../components/ContactLinks/ContactLinksList';
import { SkillsList } from '../components/Skills/SkillsList';
import { Header as SectionHeader } from '../components/Section/Header';
import { Section } from '../components/Section/Section';
import { ProjectAbstract } from '../components/ProjectAbstract/Abstract';
import { Link } from 'react-router-dom';

export const Home = (props) => {
  const colors = slice(props.stackColors, 0, 3);

  return (
    <>
      <PageHeader stackColors={ props.stackColors }
                  title="Full Stack Developer & Designer"
                  breadcrumbs={ props.breadcrumbs }>
        <ContactLinksList colors={ colors }/>
      </PageHeader>

      <Section 
        className="section--full-viewport"
        render={ visible => (
          <>
            <SectionHeader subheading="Hi, I'm a Kiwi that enjoys dipping my feet in all aspects of development."
                           heading="What I Can Do"
                           visible={ visible } />
            <SkillsList skills={ props.skills } visible={ visible } colors={ colors } />
          </>
        )} 
      />

      <Section className="section--margin-bottom" render={ visible => (
        <>
          <SectionHeader subheading="What I've worked on."
                         heading="Selected Works & Projects"
                         visible={ visible } />
          <ul className="reset-list" id="projects">
            { props.projects.map((project, key) => (
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
            { props.architecture.map((project, key) => (
              <li role="article" key={ key }>
                <Link to={ project.link } >
                  <ProjectAbstract {...project} />
                </Link>
              </li>
            )) }
          </ul>
        </>
      )} />

      <Footer colors={ colors }/>
    </>
  );
}

