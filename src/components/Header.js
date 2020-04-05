import React from 'react';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';

export const Header = (props) => {
  return (
    <header className={ (props.animate === true ? 'animated fadeIn' : 'hidden') + ' section section--full-viewport' }>
      <Breadcrumbs breadcrumbs={ props.breadcrumbs }/>
      <h1>{ props.title }</h1>
      { props.children }
    </header>
  );
};
