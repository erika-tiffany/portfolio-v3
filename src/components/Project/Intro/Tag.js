import React, { useState, useEffect } from 'react';

export const Tag = (props) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (props.visible && animated === false) {
      const timer = setTimeout(() => {
        setAnimated(true);
        if (props.last) props.onFinishAnimating();
      }, props.order * 100);
      return () => clearTimeout(timer);
    }
  }, [animated, props]);

  return (
    <li className={ 'project-intro__tag ' + (animated ? 'animated fadeIn' : 'hidden') } >{ props.tag }</li>
  );
}