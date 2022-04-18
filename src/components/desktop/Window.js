import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../../pages/Window.css';

export default class Window extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel">
        <div className="top_bar">
          <div className="descriptor">{this.props.descriptor}</div>
          <div className="buttons">
            <div id="minimize" className="min bar_click"></div>
            <div id="maximize" className="max bar_click"></div>
            <div id="close" className="exit bar_click"></div>
          </div>
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    );
  }
}
