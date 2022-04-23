import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../../pages/Window.css';

export default class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentSize: {
        height: this.props.height,
        width: this.props.width
      }
    }
  }

  render() {
    return (
      <div className="panel" style={this.state.parentSize}>
        <div className="top_bar">
          <div className="top line"></div>
          <div className="descriptor">{this.props.descriptor}</div>
          <div className="buttons">
            <div className="min bar_click" onClick={this.props.minimize}></div>
            <div className="max bar_click"></div>
            <div className="exit bar_click" onClick={this.props.close}></div>
          </div>
          <div className="bottom line"></div>
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    );
  }
}