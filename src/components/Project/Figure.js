import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { FigureImage } from './FigureImage';

export const Figure = (props) => {
  const [visible, setVisible] = useState(false);

  function handleVisibilityChange(isVisible) {
    // if visible is already set to true, we don't care anymore
    // because it means the section has already been viewed
    // and therefore the content is already in view
    if (visible === true) return;
    setVisible(isVisible);
  }

  return (
    <VisibilitySensor onChange={ handleVisibilityChange }>
      <figure className={ 'project-figure ' + (visible ? 'animated fadeIn' : 'hidden') } >
        <figcaption className="project-figure__caption">
          <hr className={ 'project-figure__divider' + (visible ? ' project-figure__divider-show' : '') } />
          <h3 className="project-figure__caption__heading">{ props.heading }</h3>
          <span className="subheading subheading--small">{ props.subheading }</span>
        </figcaption>
        <FigureImage path={ props.path } />
      </figure>
    </VisibilitySensor>
  );
}