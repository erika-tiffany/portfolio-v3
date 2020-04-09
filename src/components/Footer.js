import React from 'react';
import { Header as SectionHeader } from './Section/Header';
import { ContactLinksList } from './ContactLinks/ContactLinksList';

export const Footer = (props) => {
  return (
    <footer className="section section--full-viewport">
      <SectionHeader subheading="I can help."
                     heading="Drop me a line"
                     visible={ true } />
      <ContactLinksList className=" stack-bottom-anchor" colors={ props.colors }/>
    </footer>
  );
}