import React from 'react';

export const Technology = (props) => {
  const TechnologySvg = props.svg;

  return (
    <li className="project-abstract__technology" title={ props.title }>
      <TechnologySvg className="project-abstract__technology__svg" title={ props.title } fill="#000000"/>
    </li>
  );
}