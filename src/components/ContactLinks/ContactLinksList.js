import React from 'react';
import { sample } from 'lodash';
import { ContactLink } from './ContactLink';
import { CONTACTLINKS, HOMEPAGECOLORS } from '../../utilities/constants';

export const ContactLinksList = (props) => {
  return (
    <nav className={ 'main-links' + props.className }>
      { CONTACTLINKS.map((link, key) => (
        <ContactLink {...link}
            key={ key } 
            hoverColor={ sample( HOMEPAGECOLORS ) }/>
      )) }
    </nav>
  );
}