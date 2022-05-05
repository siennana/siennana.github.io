import React, { Component } from 'react';

const tabStyle = {
  borderRadius: '5px',
  border: '3px solid black',
  padding: '0.5rem 1rem 0.5rem 1rem',
  backgroundColor: 'rgb(233, 210, 255)',
  boxShadow: '8px 8px 1px rgba(0, 0, 0, 0.5)',
  cursor: 'pointer',
  margin: '1.5rem 0 0 1.5rem'
};

export default class Tab extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div onClick={this.props.unMinimize} style={tabStyle}>{this.props.display}</div>
    );
  }
}