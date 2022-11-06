import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { TabProps, WindowProps } from '../../types/window-props';
import '../../pages/Window.css';
import WindowBar from '../widgets/WindowBar';

type WindowState = {}

export default class Window extends Component<WindowProps, WindowState> {
  constructor(props: WindowProps) {
    super(props);
  }

  childProps = this.props as Pick<WindowProps, 'key' | 'displayName' | 'close'>;

  render() {
    return (
      <Draggable>
        <div className="panel" style={this.props.size}>
          <WindowBar {...this.props as Pick<WindowProps, 'key'| 'displayName' | 'close' | 'minimize' | 'unminimize'>}/>
          <div className="content">
            {this.props.content}
          </div>
          <div className='panel-bottom-bar'></div>
        </div>
      </Draggable>
    );
  }
}