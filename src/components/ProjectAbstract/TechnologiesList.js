import React from 'react';
import { Technology } from './Technology';

export const TechnologiesList = (props) => {
  return (
    <ul className="project-abstract__technologies">
      { props.technologies.map((tech, key) => (
        <Technology key={ key } title={ tech } />
      )) }
    </ul>
  );
}