import React from 'react';
import { MainLinks } from './MainLinks';

export const Header = (props) => {
  return (
    <header className="section section--full-viewport">
      <span className="subheading subheading--large">Erika Kishi</span>
      <h1>Full Stack Developer & Designer</h1>
      <MainLinks />
    </header>
  );
};
