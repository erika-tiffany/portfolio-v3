import React from 'react';
import { ReactComponent as Resume } from '../icons/resume.svg';
import { ReactComponent as Email } from '../icons/email.svg';
import { ReactComponent as LinkedIn } from '../icons/linkedin.svg';

export const MainLinks = (props) => {
    return (
        <nav className="main-links">
          <a className="main-links__link" rel="noopener noreferrer" target="_blank" href="//dog1qqresop9s.cloudfront.net/Fu5nuGfFGPuBezkZ-Resume-EK.pdf">
              <Resume className="main-links__icon" fill="#4A4A4A"/>
          </a>
          <a className="main-links__link" rel="noopener noreferrer" target="_blank" href="mailto:erikatiffany.k@gmail.com">
              <Email className="main-links__icon" fill="#4A4A4A"/>
          </a>
          <a className="main-links__link" rel="noopener noreferrer" target="_blank" href="//www.linkedin.com/in/erika-kishi-801623188/">
              <LinkedIn className="main-links__icon" fill="#4A4A4A"/>
          </a>
        </nav>
    );
}