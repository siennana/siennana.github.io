import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import { WindowProps } from '../../types/window-props';
import '../../pages/Window.css';
import WindowBar from '../widgets/WindowBar';

type WindowState = {};

const remToPx = (value: string | number | undefined): string | number | undefined => {
  if (typeof value !== 'string' || !value.endsWith('rem')) return value;
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  return parseFloat(value) * rootFontSize;
};

export default class Window extends Component<WindowProps, WindowState> {
  constructor(props: WindowProps) {
    super(props);
  }

  render() {
    const { position, width, height } = this.props;
    return (
      <Rnd
        default={{
          x: position?.x ?? 16,
          y: position?.y ?? 136,
          width: remToPx(width) ?? 'auto',
          height: remToPx(height) ?? 'auto',
        }}
        minWidth={200}
        minHeight={120}
        className="panel"
        onMouseDown={() => this.props.bringWindowToFront(this.props.id)}>
        <WindowBar
          {...this.props as Pick<WindowProps, 'id'| 'displayName' | 'close' | 'minimize' | 'unminimize'>}
        />
        <div className="content">
          {this.props.content}
        </div>
        <div className='panel-bottom-bar'></div>
      </Rnd>
    );
  }
}
