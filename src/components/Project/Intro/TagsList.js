import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { Tag } from './Tag';

export const TagsList = (props) => {
  const [visible, setVisible] = useState(false);
  const [finishedAnimating, setFinishedAnimating] = useState(false);

  function handleVisibilityChange(isVisible) {
    // if visible is already set to true, we don't care anymore
    // because it means the section has already been viewed
    // and therefore the content is already in view
    if (visible === true) return;
    setVisible(isVisible);
  }

  function handleFinishedAnimating() {
    if (finishedAnimating === true) return;
    setFinishedAnimating(true);
  }

  return (
    <VisibilitySensor onChange={ handleVisibilityChange }>
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