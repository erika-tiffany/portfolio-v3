import React from 'react';

export const IntroText = (props) => {
  return (
    <>
      { props.text.map((paragraph, key) => (
        <p key={ key } className={ key === 0 ? 'margin-top-0' : '' } >{ paragraph }</p>
      )) }
    </>
  );
}