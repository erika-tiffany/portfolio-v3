import React from 'react';
import { Icon } from '../Icon';

export const Technology = (props) => {
  return (
    <li className="project-abstract__technology" title={ props.title }>
      <Icon className="project-abstract__technology__svg" title={ props.title } fill="#000000"/>
    </li>
  );
}