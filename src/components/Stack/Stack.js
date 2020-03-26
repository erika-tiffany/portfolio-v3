import React, { useState, useEffect } from 'react';
import { getDocumentHeight } from '../../utilities/helpers';
import { SingleStack } from './SingleStack';

export const Stack = (props) => {
  const top = useStackTop('20vh');
  const bottom = useStackBottom('20vh');

  return (
    <div className="stack" style={ {top: top, bottom: bottom} }>
        { props.colors.map((color, key) => (
          <SingleStack key={ key } 
                       stackId={ key } 
                       color={ color } 
                       stackFinished={ () => props.handleChangeStackAnimated() }/>
        )) }
    </div>
  );
}

function calculateExtraOffset() {
  return window.innerWidth < 767 ? 80 : 110;
}

function useStackTop(initialValue) {
  const [top, setTop] = useState(initialValue);

  useEffect(() => {
    function handleSetTop() {
      const topAnchor = document.getElementsByClassName('stack-top-anchor')[0];
      if (topAnchor === undefined) return;
      const topAnchorRect = topAnchor.getBoundingClientRect();
      // https://stackoverflow.com/q/16949642
      const top = topAnchorRect.top + window.scrollY;
      setTop(top - calculateExtraOffset());
    }

    handleSetTop();
    window.addEventListener('resize', handleSetTop, false);
    return () => {
      window.removeEventListener('resize', handleSetTop, false)
    };
  });

  return top;
}

function useStackBottom(initialValue) {
  const [bottom, setBottom] = useState(initialValue);

  useEffect(() => {
    function handleSetBottom() {
      const bottomAnchor = document.getElementsByClassName('stack-bottom-anchor')[0];
      if (bottomAnchor === undefined) return;
      const bottomAnchorRect = bottomAnchor.getBoundingClientRect();
      // https://stackoverflow.com/q/16949642
      const bottom = getDocumentHeight() - (bottomAnchorRect.bottom + window.scrollY);
      setBottom(bottom - calculateExtraOffset());
    }

    handleSetBottom();
    window.addEventListener('resize', handleSetBottom, false);
    return () => {
      window.removeEventListener('resize', handleSetBottom, false)
    };
  });

  return bottom;
}