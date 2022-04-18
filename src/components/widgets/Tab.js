import React, { Component } from 'react';

const tabStyle = {
  borderRadius: '5px',
  border: '3px solid black',
  padding: '0.75rem',
  backgroundColor: 'white',
  cursor: 'pointer',
  margin: '0.75rem 0 0 1rem'
};

export default class Tab extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={tabStyle}>{this.props.display}</div>
    );
  }
}