import React from 'react';
import { sample } from 'lodash';
import { Language } from './Language';

export const LanguageList = (props) => {
  return (
    <ul className="language-list">
      { props.languages.map((language, key) => (
        <Language key={ key } title={ language } color={ sample(props.colors) }/>
      )) }
    </ul>
  );
}