import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { Tag } from './Tag';

export const TagsList = (props) => {
  const [visible, setVisible] = useState(false);
  const [finishedAnimating, setFinishedAnimating] = useState(false);

  function handleVisibilityChange(isVisible) {
    setVisible(isVisible);
  }

  function handleFinishedAnimating() {
    if (finishedAnimating === true) return;
    setFinishedAnimating(true);
  }

  return (
    <VisibilitySensor active={ !visible } onChange={ handleVisibilityChange }>
      <>
        <ul className="project-intro__tags">
          { props.tags.map((tag, key) => (
            <Tag key={ key } 
                 visible={ visible } 
                 tag={ tag } 
                 order={ key }
                 last={ (props.tags.length - 1) <= key }
                 onFinishAnimating={ handleFinishedAnimating } />
          )) }
        </ul>
        <hr className={ 'project-intro__divider' + (finishedAnimating ? ' project-intro__divider-show' : '') } />
      </>
    </VisibilitySensor>
  );
}