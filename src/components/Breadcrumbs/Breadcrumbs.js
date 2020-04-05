import React from 'react';
import { Breadcrumb } from './Breadcrumb';

export const Breadcrumbs = (props) => {
  return (
    <nav>
      { props.breadcrumbs.map((crumb, key) => (
          <Breadcrumb key={ key } {...crumb} order={ key } />
      )) }
    </nav>
  );
}