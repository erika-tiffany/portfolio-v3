import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { TechnologiesList } from './TechnologiesList';
import { SkillsList } from './SkillsList';
import { MainFigure } from './MainFigure';
import { BackgroundImage } from './BackgroundImage';

export const ProjectAbstract = (props) => {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(325);

  function handleVisibilityChange(isVisible) {
    // if visible is already set to true, we don't care anymore
    // because it means the section has already been viewed
    // and therefore the content is already in view
    if (visible === true) return;
    setVisible(isVisible);
  }

  function handleWidthChange(width) {
    setWidth(width);
  }

  return (
    <VisibilitySensor onChange={ handleVisibilityChange }>
      <div className={ 'project-abstract ' + (visible ? 'animated fadeIn' : 'hidden') }>
        <div className="project-abstract__figure">
          <MainFigure folderName={ props.folderName } 
                      onWidthChange={ handleWidthChange }
                      project={ props.project } />
          <BackgroundImage folderName={ props.folderName } 
                           mainWidth={ width }
                           project={ props.project } />
        </div>
        <div className="project-abstract__description" style={ { width: width } }>
          <div className="project-abstract__description-container">
            <div className="project-abstract__description-section">
              <TechnologiesList technologies={ props.technologies }/>
            </div>
            <hr className={ 'project-abstract__divider ' + (visible ? 'project-abstract__divider-show' : '')} />
            <div className="project-abstract__description-section">
              <h3>{ props.project }</h3>
              <SkillsList skills={ props.skills } />
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
}