import React from 'react';

export const SectionHeader = (props) => {
  return (
    <header>
      <span className="subheading subheading--medium">{ props.subheading }</span>
      <h2 className="section__heading">{ props.heading }</h2>
    </header>
  );
}