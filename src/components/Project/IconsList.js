import React, { useState } from 'react';
import { find } from 'lodash';
import { Icon } from './Icon';
import { TECHNOLOGIES_FRAMEWORKS } from '../../utilities/constants';
import { ReactComponent as Unknown } from '../../icons/unknown.svg';
import VisibilitySensor from "react-visibility-sensor";

export const IconsList = (props) => {
  const [visible, setVisible] = useState(false);

  function handleVisibilityChange(isVisible) {
    // if visible is already set to true, we don't care anymore
    // because it means the section has already been viewed
    // and therefore the content is already in view
    if (visible === true) return;
    setVisible(isVisible);
  }

  function findTechnologyFrameworkIcon(title) {
    const technology = find(TECHNOLOGIES_FRAMEWORKS,['title', title]);
    if (technology === undefined) return { svg: Unknown, title: title };
    return technology;
  }

  return (
    <VisibilitySensor onChange={ handleVisibilityChange }>
      <>
        <ul className="project-intro__icons">
          { props.icons.map((icon, key) => (
            <Icon key={ key } 
                  order={ key } 
                  visible={ visible } 
                  {...findTechnologyFrameworkIcon(icon)} />
          )) }
        </ul>
      </>
    </VisibilitySensor>
  );
}