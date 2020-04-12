import React, { useRef, useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

export const FigureImage = (props) => {
  const container = useRef(null);
  const height = useWidthResize(container, props.auto);

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

function useWidthResize(container, auto) {
  const defaultHeight = auto ? 'auto' : 0;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(defaultHeight);

  useEffect(() => {
    function handleHeightChange() {
      const currentWidth = container.current.offsetWidth;
      if (currentWidth !== width) setWidth(currentWidth);

      if (defaultHeight === 'auto') return;

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