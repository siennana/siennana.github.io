import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { WindowProps } from '../../types/window-props';
import '../../pages/Window.css';
import WindowBar from '../widgets/WindowBar';

type WindowState = {};

export default class Window extends Component<WindowProps, WindowState> {
  constructor(props: WindowProps) {
    super(props);
  }

  render() {
    return (
      <Draggable
        defaultPosition={this.props.position}
        onMouseDown={() => this.props.bringWindowToFront(this.props.id)}>
        <div className="panel" style={this.props.size}>
          <WindowBar 
            {...this.props as Pick<WindowProps, 'id'| 'displayName' | 'close' | 'minimize' | 'unminimize'>}
          />
          <div className="content">
            {this.props.content}
          </div>
          <div className='panel-bottom-bar'></div>
        </div>
      </Draggable>
    );
  }
}
