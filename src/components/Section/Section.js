import React, { useState } from 'react';
import VisibilitySensor from "react-visibility-sensor";

export const Section = (props) => {
  const [visible, setVisible] = useState(false);

  function onChange(isVisible) {
    setVisible(isVisible);
  }

  return (
    <section className={ 'section ' + props.className }>
      <VisibilitySensor active={ !visible } partialVisibility={ true } onChange={ onChange }>
        { props.render(visible) }
      </VisibilitySensor>
    </section>
  );
}