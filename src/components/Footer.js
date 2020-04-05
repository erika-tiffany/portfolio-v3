import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ContactLinksList } from './ContactLinks/ContactLinksList';

export const Footer = (props) => {
  return (
    <footer className="section section--full-viewport">
      <SectionHeader subheading="I can help."
                     heading="Drop me a line"
                     visible={ true } />
      <ContactLinksList className=" stack-bottom-anchor"/>
    </footer>
  );
}