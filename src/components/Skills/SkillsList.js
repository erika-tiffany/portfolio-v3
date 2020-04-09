import React from 'react';
import { Skill } from './Skill';
import { sample } from 'lodash';

export const SkillsList = (props) => {
  return (
    <ul className="skills-list">
      { props.skills.map((skill, key) => (
        <Skill key={ key } {...skill} 
               skillId={ key }
               color={ sample( props.colors ) }
               animate={ props.visible } />
      )) }
    </ul>
  );
}