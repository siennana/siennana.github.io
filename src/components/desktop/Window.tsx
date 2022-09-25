import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { WindowProps } from '../../types/window-props';
import '../../pages/Window.css';

type WindowState = {}

export default class Window extends Component<WindowProps, WindowState> {
  constructor(props: WindowProps) {
    super(props);
  }

  render() {
    return (
      <Draggable>
        <div className="panel" style={this.props.size}>
          <div className="top_bar">
            <div className="descriptor">{this.props.displayName}</div>
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
      </Draggable>
    );
  }
}