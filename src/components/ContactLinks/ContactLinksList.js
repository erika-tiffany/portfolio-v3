import React from 'react';
import { sample } from 'lodash';
import { ContactLink } from './ContactLink';
import { ReactComponent as Resume } from '../../icons/resume.svg';
import { ReactComponent as Email } from '../../icons/email.svg';
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg';
import { ReactComponent as LocationNz } from '../../icons/new-zealand.svg';

export const ContactLinksList = (props) => {
  const CONTACT_LINKS = [
    { svg: Resume, href: "https://d3768789qe68al.cloudfront.net/ZKt5yq7eH5aQscF8qU2u-EK-resume.pdf" },
    { svg: Email, href: "mailto:erikatiffany.k@gmail.com" },
    { svg: LinkedIn, href: "//www.linkedin.com/in/erika-kishi-801623188/" },
    { svg: LocationNz, href: "/" },
  ];

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