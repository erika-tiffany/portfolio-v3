import React from 'react';

export const Text = (props) => {
  return (
    <>
      { props.text.map((paragraph, key) => (
          (paragraph.match(/<.+>/g))
          ? <p key={ key } className={ key === 0 ? 'margin-top-0' : '' } dangerouslySetInnerHTML={ {__html: paragraph} }></p>
          : <p key={ key } className={ key === 0 ? 'margin-top-0' : '' }>{ paragraph }</p>
      )) }
    </>
  );
}