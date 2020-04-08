import React from 'react';
import { findIcon } from '../utilities/icons';

export const Icon = (props) => {
  const icon = findIcon(props.title);
  const IconSvg = icon.svg;
  const fill = props.fill ? props.fill : '#000000';

  return <IconSvg fill={ fill } />;
}