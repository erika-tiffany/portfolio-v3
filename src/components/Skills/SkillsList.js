import React from 'react';
import { Skill } from './Skill';
import { sample } from 'lodash';
import { HOMEPAGE_COLORS } from '../../utilities/constants';

export const SkillsList = (props) => {
  return (
    <ul className="skills-list">
      { props.skills.map((skill, key) => (
        <Skill key={ key } {...skill} 
               color={ sample( HOMEPAGE_COLORS ) }
               animate={ props.animate } />
      )) }
    </ul>
  );
}