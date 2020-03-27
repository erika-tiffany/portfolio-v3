import React, { useState, useEffect } from 'react';

export const Skill = (props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (props.animate === true) setWidth(props.competency);
  }, [props.animate]);

  return (
    <li className="skill">
      <div className="skill__competency" 
           style={{ 
             width: width + '%', 
             backgroundColor: props.color 
           }}></div>
      <span className="skill__label">{ props.skill }</span>
    </li>
  );
}