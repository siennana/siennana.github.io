import React, { Component } from 'react';
import { TabProps } from '../../types/window-props';
import '../../pages/WindowBar.css';

type WindowBarState = {};

export default class WindowBar extends Component<TabProps, WindowBarState> {

  onMinimize = () => {
    return this.props.minimized ? this.props.unminimize : this.props.minimize;
  };

  onClose = () => {
    return this.props.close;
  };

  onBack = () => {
    console.log('back clicked');
  };

  render() {
    const backButton = 
      <div
        className="window-button"
        onClick={this.onBack}
        onTouchStart={this.onBack}>
        BACK
      </div>;
    return (
      <div className={this.props.minimized ? 'top_bar minimized' : 'top_bar'}>
        <div className="descriptor">{this.props.displayName}</div>
        <div className="buttons">
          {}
          <div 
            className="window-button" 
            onClick={this.onMinimize()} 
            onTouchStart={this.onMinimize()}>
            -
          </div>
          <div 
            className="window-button" 
            onClick={this.onClose()}
            onTouchStart={this.onClose()}>
            x
          </div>
        </div>
      </div>
    );
  }
}
