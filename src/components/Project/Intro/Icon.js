import React, { useState, useEffect } from 'react';
import { Icon as IconSVG } from '../../Icon';

export const Icon = (props) => {
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
        title={ props.title }>
          <IconSVG title={ props.title } 
                   fill='#343057' />
    </li>
  );
}