import React from 'react';
import { sample } from 'lodash';
import { ContactLink } from './ContactLink';
import { CONTACT_LINKS, HOMEPAGE_COLORS } from '../../utilities/constants';

export const ContactLinksList = (props) => {
  return (
    <nav className={ 'main-links' + props.className }>
      { CONTACT_LINKS.map((link, key) => (
        <ContactLink {...link}
            key={ key } 
            hoverColor={ sample( HOMEPAGE_COLORS ) }/>
      )) }
    </nav>
  );
}