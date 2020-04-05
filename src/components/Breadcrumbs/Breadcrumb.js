import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export const Breadcrumb = (props) => {
  return (
    <NavLink to={ props.link }>
      <span className="subheading subheading--large stack-top-anchor">{ (props.order > 0 ? ' / ' : '') + props.title }</span>
    </NavLink>
  );
}