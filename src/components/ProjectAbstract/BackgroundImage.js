import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

export const BackgroundImage = (props) => {
  const [width, setWidth] = useState(405);
  const [top, setTop] = useState(-55);
  const [left, setLeft] = useState(-25);

  useEffect(() => {
    const newWidth = (props.mainWidth / 65) * 81;
    if (newWidth === width) return;
    setWidth(newWidth);
  },[props.mainWidth, width]);

  useEffect(() => {
    setTop((width / 81) * -11);
    setLeft((width / 81) * -5);
  },[width]);

  return (
    <LazyLoad once>
      <img className="project-abstract__figure__background" 
           src={ 'https://d3768789qe68al.cloudfront.net/images/projects/' + props.folderName + '/001-background_w-500px_compressed.png' }
           style={ { width: width, top: top, left: left } } 
           alt={ props.project + ' main abstract image\'s background image' }/>
    </LazyLoad>
  );
}