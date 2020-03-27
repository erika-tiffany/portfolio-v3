import React from 'react';

export const SectionHeader = (props) => {
  return (
    <header className={ props.visible ? 'animated fadeIn slow' : 'hidden' }>
      <span className="subheading subheading--medium">{ props.subheading }</span>
      <h2 className="section__heading">{ props.heading }</h2>
    </header>
  );
}