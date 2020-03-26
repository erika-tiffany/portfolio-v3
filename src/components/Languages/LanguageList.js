import React from 'react';
import { Language } from './Language';
import { find } from 'lodash';
import { DEVELOPMENT_LANGUAGE_ICONS } from '../../utilities/constants';
import { ReactComponent as Unknown } from '../../icons/unknown.svg';

export const LanguageList = (props) => {
  function findLanguageIcon(title) {
    const language = find(DEVELOPMENT_LANGUAGE_ICONS,['title', title]);
    if (language === undefined) return { svg: Unknown, title: title };
    return language;
  }

  return (
    <ul className="language-list">
      { props.languages.map((language, key) => (
        <Language key={ key } {...findLanguageIcon(language)} />
      )) }
    </ul>
  );
}