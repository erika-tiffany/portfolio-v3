import React, { useRef, useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

export const FigureImage = (props) => {
  const container = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const height = useWidthResize(container, props.auto, loaded);

  function handleOnLoad() {
    setLoaded(true);
  }

  return (
    <div className="project-figure__container" >
      <div ref={ container } style={ { height: height } }>
        <LazyLoad once>
          <img alt="test" 
               src={ 'https://d3768789qe68al.cloudfront.net/images/projects' + props.path }
               onLoad={ handleOnLoad } />
        </LazyLoad>
      </div>
    </div>
  );
}

function useWidthResize(container, auto, loaded) {
  // const defaultHeight = auto ? 'auto' : 0;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    function handleHeightChange() {
      const currentWidth = container.current.offsetWidth;
      if (currentWidth !== width) setWidth(currentWidth);

      if (auto) return;

      if (width === 0) return;

      const newHeight = (currentWidth / 16) * 9;
      if (newHeight === height) return;
      setHeight(newHeight);
    }

    handleHeightChange();
  
    window.addEventListener('resize', handleHeightChange, false);
    return () => window.removeEventListener('resize', handleHeightChange, false);
  }, [loaded, height, width, auto, container])

  return height;
}