import React from 'react';

export class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "#898b8f"};
  }

  handleOnMouseOver = () => {
    return this.setState({color: this.props.hoverColor});
  }

  handleOnMouseOut = () => {
    return this.setState({color: "#898b8f"});
  }

  render() {
    const LinkSvg = this.props.svg;

    return (
      <a className="main-links__link" 
        rel="noopener noreferrer" 
        target="_blank" 
        href={this.props.href}
        onMouseOver={this.handleOnMouseOver}
        onMouseOut={this.handleOnMouseOut}>
        <LinkSvg className="main-links__icon" fill={this.state.color} />
      </a>
    );
  }
}

// export const Link = (props) => {
//   const LinkSvg = props.svg;

//   return (
//     <a className="main-links__link" 
//        rel="noopener noreferrer" 
//        target="_blank" 
//        href={props.href}>
//       <LinkSvg className="main-links__icon" fill="#4A4A4A" />
//     </a>
//   );
// }