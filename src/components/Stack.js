import React from 'react';
import PropTypes from 'prop-types';

export const Stack = (props) => {
  return (
    <div className="stack">
      {props.colors.map((color, key) => (
        <div key={key} className={"stack--" + color}></div>
      ))}
    </div>
  );
}

Stack.protoTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
}