import React, { useState } from 'react';

export const ContactLink = (props) => {
  const [color, setColor] = useState('#4A4A4A');
  const LinkSvg = props.svg;

  return (
    <a href={ props.href }
       onMouseOver={ () => setColor(props.hoverColor) }
       onMouseOut={ () => setColor('#4A4A4A') }
       className="main-links__link" 
       rel="noopener noreferrer" 
       target="_blank">
      <LinkSvg className="main-links__icon" fill={ color } />
    </a>
  );
}