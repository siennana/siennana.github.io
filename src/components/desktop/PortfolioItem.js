import React, { Component } from 'react';
import '../../pages/PortfolioItem.css';

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }

	render() {
    return (
      <div>
        <div className='portfolioItem-wrapper'>
          <h2 className='portfolioItem-header'>{this.props.title}</h2>
          <p className='portfolioItem-date'>{this.props.dateRange}</p>
          <p className='portfolioItem-description'>{this.props.description}</p>
        </div>
		  </div>
    );
  }
}
  