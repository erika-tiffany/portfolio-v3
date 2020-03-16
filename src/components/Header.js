import React from 'react';
import { ContactLinksList } from './ContactLinks/ContactLinksList';

export const Header = (props) => {
  return (
    <header className="section section--full-viewport">
      <span className="subheading subheading--large">Erika Kishi</span>
      <h1>Full Stack Developer & Designer</h1>
      <ContactLinksList />
    </header>
  );
};
