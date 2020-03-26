import React from 'react';

export const Language = (props) => {
  const LanguageSvg = props.svg;

  return (
    <li className="language" 
        title={ props.title }>
      <LanguageSvg className="language__svg" 
                   title={ props.title } 
                   fill="#000000"/>
    </li>
  );
}