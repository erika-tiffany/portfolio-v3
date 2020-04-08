import React, { useRef, useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

export const FigureImage = (props) => {
  const container = useRef(null);
  const height = useWidthResize(container);

  return (
    <div className="project-figure__container" 
         ref={ container } 
         style={ { height: height } }>
      <LazyLoad once>
        <img alt="test" src={ props.path } />
      </LazyLoad>
    </div>
  );
}

function useWidthResize(container) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleHeightChange() {
      const currentWidth = container.current.offsetWidth;
      if (currentWidth !== width) setWidth(currentWidth);

      const newHeight = (currentWidth / 16) * 9;
      if (newHeight === height) return;
      setHeight(newHeight);
    }

    handleHeightChange();
  
    window.addEventListener('resize', handleHeightChange, false);
    return () => window.removeEventListener('resize', handleHeightChange, false);
  })

  return height;
}