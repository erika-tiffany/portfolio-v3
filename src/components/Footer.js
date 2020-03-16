import React from 'react';
import { LinksList } from './MainLinks/LinksList';

export const Footer = (props) => {
  return (
    <footer className="section section--full-viewport">
      <span className="subheading subheading--medium">I can help.</span>
      <h2>Drop me a line</h2>
      <LinksList />
    </footer>
  );
}