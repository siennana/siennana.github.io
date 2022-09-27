import React, { Component } from 'react';
import { PortfolioItemProps } from '../../../types/window-props';
import '../../../pages/PortfolioItem.css';


export default class PortfolioItem extends Component<PortfolioItemProps, {}> {

	render() {
    return (
      <div className='portfolioItem-wrapper'>
        <div className='portfolioItem-header'>{this.props.title}</div>
        <p>{this.props.dateRange}</p>
        <p>{this.props.description}</p>
        <ul>
          <li>Git</li>
          <li>C#</li>
          <li>.NET</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    );
  }
}
  