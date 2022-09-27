import React, { Component } from 'react';
import '../../../pages/Portfolio.css';
import PortfolioItem from './PortfolioItem';
import { selfDescription, portfolioItems } from '../../../constants/portfolio.const';

export default class Portfolio extends Component<{}, {}> {
  render() {
    return (
      <div className='projects-wrapper'>
        <h1 className='portfolio-header'>HEY, I'M SIENNA</h1>
        <p className="portfolio-about">{selfDescription}</p>
        <ul className="portfolio-links">
          <li><a href='./assets/PDFs/resume_4_18_22.pdf' target='_blank'>Check out my Resume</a></li>
        </ul>
        <div className='portfolio-items-wrapper'>
          <PortfolioItem {...portfolioItems[0]}></PortfolioItem>
          <PortfolioItem {...portfolioItems[1]}></PortfolioItem>
          <PortfolioItem {...portfolioItems[2]}></PortfolioItem>
          <PortfolioItem {...portfolioItems[3]}></PortfolioItem>
        </div>
      </div>
    );
  }
}