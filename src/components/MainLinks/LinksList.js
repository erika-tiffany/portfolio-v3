import React from 'react';
import { sample } from 'lodash';
import { Link } from './Link';
import { ReactComponent as Resume } from '../../icons/resume.svg';
import { ReactComponent as Email } from '../../icons/email.svg';
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg';
import { ReactComponent as LocationNz } from '../../icons/new-zealand.svg';

const links = [
  { svg: Resume, href: "//dog1qqresop9s.cloudfront.net/Fu5nuGfFGPuBezkZ-Resume-EK.pdf" },
  { svg: Email, href: "mailto:erikatiffany.k@gmail.com" },
  { svg: LinkedIn, href: "//www.linkedin.com/in/erika-kishi-801623188/" },
  { svg: LocationNz, href: "/" },
];

const colors = ['#F2CD88', '#88C1F2', '#C4E1F2'];

export class LinksList extends React.Component {
  selectRandomColor() {
    return sample(colors);
  }

  render() {
    return (
      <nav className="main-links">
        {links.map((link, key) => (
          <Link {...link}
                key={key} 
                hoverColor={this.selectRandomColor()}/>
        ))}
      </nav>
    );
  }
}