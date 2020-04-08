import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";

export const Section = (props) => {
  const [visible, setVisible] = useState(false);

  function onChange(isVisible) {
    // if visible is already set to true, we don't care anymore
    // because it means the section has already been viewed
    // and therefore the content is already in view
    if (visible === true) return;
    setVisible(isVisible);
  }

  return (
    <section className={ 'section ' + props.className }>
      <VisibilitySensor partialVisibility={ true } onChange={ onChange }>
        { props.render(visible) }
      </VisibilitySensor>
    </section>
  );
}