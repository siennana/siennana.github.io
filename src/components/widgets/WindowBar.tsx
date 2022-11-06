import React, { Component } from 'react';
import { TabProps } from '../../types/window-props';
import '../../pages/WindowBar.css';

type WindowBarState = {};

export default class WindowBar extends Component<TabProps, WindowBarState> {
  constructor(props: TabProps) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.minimized ? 'top_bar minimized' : 'top_bar'}>
        <div className="descriptor">{this.props.displayName}</div>
        <div className="buttons">
          <div className="window-button" onClick={this.props.minimized ? this.props.unminimize : this.props.minimize}>
            -
          </div>
          <div className="window-button" onClick={this.props.close}>
            x
          </div>
        </div>
      </div>
    );
  }
}