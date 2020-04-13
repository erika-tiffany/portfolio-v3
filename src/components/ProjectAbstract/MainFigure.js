import React, { useState, useRef, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

export const MainFigure = (props) => {
  const figure = useRef(null);
  const [width, setWidth] = useState(325);
  const [height, setHeight] = useState(185);

  useEffect(() => {
    function handleHeightChange() {
      const currentWidth = figure.current.offsetWidth;
      if (currentWidth !== width) {
        props.onWidthChange(currentWidth);
        setWidth(currentWidth);
      }
      if (currentWidth === 325 && height === 185) return;
      if (currentWidth > 0) {
        const newHeight = (currentWidth / 65) * 37;
        if (newHeight === height) return;
        setHeight(newHeight);
      }
    }
    handleHeightChange();
    window.addEventListener('resize', handleHeightChange, false);
    return () => {
      window.removeEventListener('resize', handleHeightChange, false)
    };
  })

  return (
    <figure ref={ figure }
            className="project-abstract__figure__main" 
            style={ { height: height } }>
      <LazyLoad once>
        <img src={ '//portfolio-v3-assets.s3.us-east-2.amazonaws.com/images/projects/' + props.folderName + '/001_w-1000px_compressed.png' }
             alt={ props.project + ' main abstract image' } />
      </LazyLoad>
    </figure>
  );
}