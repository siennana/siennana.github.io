import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../../pages/Window.css';

export default class Window extends Component {
  constructor(props) {
    super(props);
    this.id = 1;
    this.state = {
      closed: false,
      minimized: false,
      maximized: false,
      parentSize: {
        height: 100,
        width: 100
      }
    }
  }

  render() {
    return (
      <div className="panel">
        <div className="top_bar">
          <div className="descriptor">{this.props.descriptor}</div>
          <div className="buttons">
            <div className="min bar_click"></div>
            <div className="max bar_click"></div>
            <div className="exit bar_click" onClick={this.props.closewindow}></div>
          </div>
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    );
  }
}