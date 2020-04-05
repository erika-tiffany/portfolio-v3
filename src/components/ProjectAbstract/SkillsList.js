import React from 'react';
import { Skill } from './Skill';

export const SkillsList = (props) => {
  return (
    <ul className="project-abstract__skills">
      { props.skills.map((skill, key) => (
        <Skill key={ key } skill={ skill } />
      )) }
    </ul>
  );
}