import React, { useState, useEffect } from 'react';

export const Icon = (props) => {
  const TechnologySvg = props.svg;
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (props.visible && animated === false) {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, props.order * 100);
      return () => clearTimeout(timer);
    }
  }, [animated, props]);


  return (
    <li className={ 'project-intro__icon ' + (animated ? 'animated fadeIn' : 'hidden') } 
        title={ props.title }><TechnologySvg /></li>
  );
}