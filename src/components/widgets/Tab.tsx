import React, { Component } from 'react';
import { TabProps } from '../../types/window-props';

const tabStyle = {
  borderRadius: '3px',
  border: '2px solid black',
  padding: '0.2rem 1rem 0.2rem 1rem',
  boxShadow: '6px 6px 1px rgba(0, 0, 0, 0.5)',
  cursor: 'pointer',
  margin: '1.5rem 0 0 1rem',
  backgroundColor: 'white',
};

export default class Tab extends Component<TabProps, {}> {

  render() {
    return (
      <div onClick={this.props.unminimize} style={tabStyle}>{this.props.displayName}</div>
    );
  }
}