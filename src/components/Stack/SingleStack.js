import React, { useState, useEffect } from 'react';

export const SingleStack = (props) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // on component mount set the single stack element to fade in
    // in order to stagger it fading in, use settimeout
    // only set timeout and set animated to true if it's originally set to false
    if (animated === false) {
      const timer = setTimeout(() => {
        setAnimated(true);
        // if white, then last element, therefore perform stack finished call
        if (props.color === 'base-white') props.stackFinished();
      }, props.stackId * 250);
      return () => clearTimeout(timer);
    }
  }, [animated, props]);

  return (
    <div className={ (animated ? 'animated fadeIn' : 'hidden') + " stack--" + props.color }></div>
  );
}