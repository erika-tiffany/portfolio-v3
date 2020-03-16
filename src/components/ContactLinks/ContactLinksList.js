import React from 'react';
import { sample } from 'lodash';
import { ContactLink } from './ContactLink';
import { CONTACTLINKS, HOMEPAGECOLORS } from '../../constants';

export class ContactLinksList extends React.Component {
  selectRandomColor() {
    return sample(HOMEPAGECOLORS);
  }

  render() {
    return (
      <nav className="main-links">
        {CONTACTLINKS.map((link, key) => (
          <ContactLink {...link}
                key={key} 
                hoverColor={this.selectRandomColor()}/>
        ))}
      </nav>
    );
  }
}