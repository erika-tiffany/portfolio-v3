import React from 'react';
import { find } from 'lodash';
import { Technology } from './Technology';
import { TECHNOLOGIES_FRAMEWORKS } from '../../utilities/constants';
import { ReactComponent as Unknown } from '../../icons/unknown.svg';

export const TechnologiesList = (props) => {
  function findTechnologyFrameworkIcon(title) {
    const technology = find(TECHNOLOGIES_FRAMEWORKS,['title', title]);
    if (technology === undefined) return { svg: Unknown, title: title };
    return technology;
  }

  return (
    <ul className="project-abstract__technologies">
      { props.technologies.map((tech, key) => (
        <Technology key={ key } {...findTechnologyFrameworkIcon(tech)} />
      )) }
    </ul>
  );
}