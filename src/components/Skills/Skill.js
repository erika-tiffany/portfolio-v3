import React, { useState, useEffect } from 'react';

export const Skill = (props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (props.animate === true) {
      // use setTimeout to stagger the widths animating for each skill
      const timer = setTimeout(() => {
        setWidth(props.competency);
      }, props.skillId * 150);
      return () => clearTimeout(timer);
    }
  }, [props]);

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