import React from 'react';

export const Header = (props) => {
  return (
    <header className={ (props.animate === true ? 'animated fadeIn' : 'hidden') + ' section section--full-viewport' }>
      <span className="subheading subheading--large stack-top-anchor">
        { props.breadcrumb.map((crumb, key) => (
          (key > 0 ? ' / ' : '') + crumb
        )) }
      </span>
      <h1>{ props.title }</h1>
      { props.children }
    </header>
  );
};
