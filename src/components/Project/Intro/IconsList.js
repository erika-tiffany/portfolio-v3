import React, { useState } from 'react';
import { Icon } from './Icon';
import VisibilitySensor from "react-visibility-sensor";

export const IconsList = (props) => {
  const [visible, setVisible] = useState(false);

  function handleVisibilityChange(isVisible) {
    setVisible(isVisible);
  }

  return (
    <VisibilitySensor active={ !visible } onChange={ handleVisibilityChange }>
      <>
        <ul className="project-intro__icons">
          { props.icons.map((icon, key) => (
            <Icon key={ key } 
                  order={ key } 
                  visible={ visible } 
                  title={ icon } />
          )) }
        </ul>
      </>
    </VisibilitySensor>
  );
}