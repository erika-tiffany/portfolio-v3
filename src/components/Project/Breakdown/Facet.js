import React, { useState } from 'react';
import { Text } from '../Text';
import { Icon } from '../../Icon';
import VisibilitySensor from "react-visibility-sensor";

export const Facet = (props) => {
  const [visible, setVisible] = useState(false);

  function handleVisibilityChange(isVisible) {
    setVisible(isVisible);
  }

  return (
    <VisibilitySensor active={ !visible } onChange={ handleVisibilityChange }>
      <div className={ 'facet ' + (visible ? 'animated fadeIn' : 'hidden') }>
        <ul className="facet__icons">
          { props.icons.map((icon, key) => (
            <li key={ key } className="facet__icon" >
              <Icon title={ icon } fill="#343057" />
            </li>
          )) }
        </ul>
        <h3>{ props.title }</h3>
        <Text text={ props.text }/>
      </div>
    </VisibilitySensor>
  );
}