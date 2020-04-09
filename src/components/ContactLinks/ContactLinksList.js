import React from 'react';
import { sample } from 'lodash';
import { ContactLink } from './ContactLink';
import { CONTACT_LINKS } from '../../utilities/constants';

export const ContactLinksList = (props) => {
  return (
    <nav className={ 'main-links' + props.className }>
      { CONTACT_LINKS.map((link, key) => (
        <ContactLink {...link}
            key={ key } 
            hoverColor={ sample(props.colors) }/>
      )) }
    </nav>
  );
}