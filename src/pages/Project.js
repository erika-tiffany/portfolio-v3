import React from 'react';
import { slice } from 'lodash';
import { PageHeader } from '../components/PageHeader';
import { Duration } from '../components/Project/Duration';
import { LanguageList } from '../components/Languages/LanguageList';
import { Footer } from '../components/Footer';
import { Header as SectionHeader } from '../components/Section/Header';
import { Section } from '../components/Section/Section';
import { Text } from '../components/Project/Text';
import { TagsList as IntroTags } from '../components/Project/Intro/TagsList';
import { IconsList as IntroIcons } from '../components/Project/Intro/IconsList';
import { FacetList as Breakdown } from '../components/Project/Breakdown/FacetList';
import { Figure } from '../components/Project/Figure';

export const Project = (props) => {
  const colors = slice(props.stackColors, 0, 3);

  return (
    <>
      <PageHeader stackColors={ props.stackColors }
                  title={ props.name }
                  breadcrumbs={ props.breadcrumbs }>
        <Duration duration={ props.duration }/>
        <LanguageList languages={ props.languages } 
                      colors={ colors }/>
      </PageHeader>

      <Section 
        className="section--row section--margin-bottom" 
        render={ visible => (
          <>
            <SectionHeader subheading={ props.intro.subheading }
                           heading={ props.intro.heading }
                           visible={ visible } />
            <div className="project-intro">
              <Text text={ props.intro.text } />
              <hr className={ 'project-intro__divider' + (visible ? ' project-intro__divider-show' : '') } />
              <IntroTags tags={ props.intro.tags } />
              <IntroIcons icons={ props.intro.icons } />
            </div>
          </>
      )} />

      {
        (props.figures)
        ? <section className={ 'section' + (props.development || props.cloud ? ' section--margin-bottom' : '') }>
            { props.figures.map((fig, key) => (
              <Figure key={ key } { ...fig } />
            )) }
          </section>
        : <></>
      }

      {
        (props.development)
        ? <Section 
            className="section--row section--margin-bottom" 
            render={ visible => (
              <>
                <SectionHeader subheading={ props.development.subheading }
                               heading={ props.development.heading }
                               visible={ visible } />
                <div>
                  {
                    (props.development.text)
                    ? <Text text={ props.development.text } />
                    : <></>
                  }
                  <Breakdown facets={ props.development.facets } />
                </div>
              </>
          )} />
        : <></>
      }

      {
        (props.cloud)
        ? <Section 
            className="section--row section--margin-bottom" 
            render={ visible => (
              <>
                <SectionHeader subheading={ props.cloud.subheading }
                               heading={ props.cloud.heading }
                               visible={ visible } />
                <div>
                  {
                    (props.cloud.text)
                    ? <Text text={ props.cloud.text } />
                    : <></>
                  }
                  <Breakdown facets={ props.cloud.facets } />
                </div>
              </>
          )} />
        : <></>
      }

      <Footer colors={ colors }/>
    </>
  );
}