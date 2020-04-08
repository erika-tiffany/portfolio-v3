import React from 'react';
import { Facet } from './Facet';

export const FacetList = (props) => {
  return (
    <ul className="facet-list">
      { props.facets.map((facet, key) => (
        <li key={ key }><Facet { ...facet } /></li>
      )) }
    </ul>
  );
}