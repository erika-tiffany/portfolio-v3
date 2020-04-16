import React from 'react';
import { Text } from './Project/Text';

export const Bio = (props) => {
  const text = [
    'I’m a Kiwi who loves all things development with a strong background in design & creativity.',
    'Over the 4+ years of experience, I have been involved in a variety of projects as a full stack developer, as a front-end developer and a back-end developer, with a recent exploration and upskilling into the AWS space.',
    'I love learning, I love creating and I’m a pretty friendly human being. I love learning, I love creating and I’m a pretty friendly human being. I am currently available for work and would love to touch base about how I may be a fit for your development team.'
  ];

  const list = [
    {
      url: 'https://d3768789qe68al.cloudfront.net/images/a9RZjJAsFfJA9dNAy4ng-profile.png',
      heading: [],
    },
    {
      url: 'https://d3768789qe68al.cloudfront.net/8NPJThvyk8vmpaVnUsmE-britain-flag-circle.svg',
      heading: ['English','Fluent'],
    },
    {
      url: 'https://d3768789qe68al.cloudfront.net/JaWeHz2yweigmkhaA3NK-japan-flag-circle.svg',
      heading: ['Japanese','Conversational'],
    },
  ]

  return (
    <>
      <div className={ props.visible ? 'animated fadeIn' : 'hidden' }>
        <Text text={ text } />
      </div>
      <hr style={ { width:'100%' } } />
      <ul  className={ 'bio-list ' + (props.visible ? 'animated fadeIn' : 'hidden') }>
        {
          list.map((item, key) => (
            <li key={ key }>
              <div className="bio-list__mask">
                <img alt={ item.heading } src={ item.url }/>
              </div>
              {
                item.heading.map((h, key) => (
                  <span key={ key } className="subheading subheading--small">{ h }</span>
                ))
              }
            </li>
          ))
        }
      </ul>
    </>
  );
}