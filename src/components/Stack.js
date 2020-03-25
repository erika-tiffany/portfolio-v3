import React from 'react';
import PropTypes from 'prop-types';
import { getDocumentHeight } from '../utilities/helpers';

export class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      top:    '20vh', 
      bottom: '20vh',
    };
  }

  calculateExtraOffset() {
    return window.innerWidth < 767 ? 80 : 110;
  }

  calculateTopOffset(element) {
    const topAnchorRect = element.getBoundingClientRect();
    // https://stackoverflow.com/q/16949642
    const top = topAnchorRect.top + window.scrollY;
    return top - this.calculateExtraOffset();
  }

  calculateBottomOffset(element) {
    const bottomAnchorRect = element.getBoundingClientRect();
    // https://stackoverflow.com/q/16949642
    const bottom = getDocumentHeight() - (bottomAnchorRect.bottom + window.scrollY);
    return bottom - this.calculateExtraOffset();
  }

  setStackPosition = () => {
    let coordinates = {};

    // get top anchor element
    const topAnchor = document.getElementsByClassName('stack-top-anchor')[0];
    if (topAnchor !== undefined) {
      coordinates.top = this.calculateTopOffset( topAnchor ) + 'px';
    }

    // get bottom anchor element
    const bottomAnchor = document.getElementsByClassName('stack-bottom-anchor')[0];
    if (bottomAnchor !== undefined) {
      coordinates.bottom = this.calculateBottomOffset( bottomAnchor ) + 'px';
    }

    this.setState(coordinates);
  }

  componentDidMount() {
    // initially set the stack position
    this.setStackPosition();
    // set the stack position on resize event
    window.addEventListener('resize', this.setStackPosition, false);
  }

  componentWillUnmount() {
    // unbind the same listener that was binded
    window.removeEventListener('resize', this.setStackPosition, false);
  }

  render() {
    return (
      <div className="stack" style={ this.state }>
        { this.props.colors.map((color, key) => (
          <div key={ key } 
               className={ "stack--" + color }></div>
        )) }
      </div>
    );
  }
}

Stack.protoTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
}