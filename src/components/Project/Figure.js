import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { FigureImage } from './FigureImage';

export const Figure = (props) => {
  const [visible, setVisible] = useState(false);

  function handleVisibilityChange(isVisible) {
    setVisible(isVisible);
  }

  return (
    <VisibilitySensor active={ !visible } partialVisibility={ true } onChange={ handleVisibilityChange }>
      <figure className={ 'project-figure ' + (visible ? 'animated fadeIn' : 'hidden') } >
        <figcaption className="project-figure__caption">
          <hr className={ 'project-figure__divider' + (visible ? ' project-figure__divider-show' : '') } />
          <h3 className="project-figure__caption__heading">{ props.heading }</h3>
          <span className="subheading subheading--small">{ props.subheading }</span>
        </figcaption>
        <FigureImage path={ props.path } auto={ props.auto ? props.auto : false } />
      </figure>
    </VisibilitySensor>
  );
}