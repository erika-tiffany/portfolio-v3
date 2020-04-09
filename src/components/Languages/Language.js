import React, { useState } from 'react';
import { Icon } from '../Icon';

export const Language = (props) => {
  const [color, setColor] = useState('#4A4A4A');

  return (
    <li className="language" 
        title={ props.title }
        onMouseOver={ () => setColor(props.color) }
        onMouseOut={ () => setColor('#000000') }>
      <Icon className="language__svg" 
            title={ props.title } 
            fill={ color }/>
    </li>
  );
}