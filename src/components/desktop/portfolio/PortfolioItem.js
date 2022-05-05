import React, { Component } from 'react';
import '../../../pages/PortfolioItem.css';

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }

	render() {
    return (
      <div className='portfolioItem-wrapper'>
        <h2 className='portfolioItem-header'>{this.props.title}</h2>
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
  