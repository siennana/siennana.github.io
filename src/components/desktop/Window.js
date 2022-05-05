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
          <div className="descriptor">{this.props.descriptor}</div>
          <div className="buttons">
            <div className="window-button" onClick={this.props.minimize}>
              <img src="/assets/images/icons/minus.png"/>
            </div>
            <div className="window-button" onClick={this.props.close}>
              <img src="/assets/images/icons/close.png"/>
            </div>
          </div>
        </div>
        <div className="content">
          {this.props.content}
        </div>
        <div className='panel-bottom-bar'></div>
      </div>
    );
  }
}