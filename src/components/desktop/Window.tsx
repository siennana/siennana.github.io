import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { TabProps, WindowProps } from '../../types/window-props';
import '../../pages/Window.css';
import WindowBar from '../widgets/WindowBar';

const posOffset = {
  x: '10%',
  y: '20%',
};

type WindowState = {
  position: {
    x: number,
    y: number,
  }
};

export default class Window extends Component<WindowProps, WindowState> {
  constructor(props: WindowProps) {
    super(props);
    this.state = {
      position: this.props.position,
    }
  }

  childProps = this.props as Pick<WindowProps, 'id' | 'displayName' | 'close'>;

  onStop = () => console.log('STOOOOOOOP');

  getOffset = () => {
    return {
      x: this.props.position.x,
      y: this.props.position.y,
    }
  }

  onMouseDown = () => {
    this.props.bringWindowToFront(this.props.id, this.state.position);
  }

  render() {
    return (
      <Draggable onStop={() => this.onStop()} defaultPosition={this.getOffset()} onStart={() => this.onMouseDown()}>
        <div className="panel" style={this.props.size}>
          <WindowBar {...this.props as Pick<WindowProps, 'id'| 'displayName' | 'close' | 'minimize' | 'unminimize'>}/>
          <div className="content">
            {this.props.content}
          </div>
          <div className='panel-bottom-bar'></div>
        </div>
      </Draggable>
    );
  }
}
