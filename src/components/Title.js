import React, { Component } from 'react';

class Title extends Component {
  constructor(props){
    super(props);
    document.title = this.props.title;
  }

  render() {
    return (
      <div />
    );
  }
}

export default Title;

