import React from 'react';
import { sample } from 'lodash';
import { ContactLink } from './ContactLink';
import { CONTACTLINKS, HOMEPAGECOLORS } from '../../utilities/constants';

export class ContactLinksList extends React.Component {
  selectRandomColor() {
    return sample( HOMEPAGECOLORS );
  }

  render() {
    return (
      <nav className={ 'main-links' + this.props.className }>
        { CONTACTLINKS.map((link, key) => (
          <ContactLink {...link}
              key={ key } 
              hoverColor={ this.selectRandomColor() }/>
        )) }
      </nav>
    );
  }
}