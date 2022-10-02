import React, { Component } from 'react';
import '../../../pages/Portfolio.css';
import PortfolioItem from './PortfolioItem';
import { selfDescription, portfolioItems } from '../../../constants/portfolio.const';

type TabKey = 'personal' | 'work';

type PortfolioState = {
  selectedTab: TabKey
}

export default class Portfolio extends Component<{}, PortfolioState> {
  constructor() {
    super({});
    this.state = {
      selectedTab: 'personal',
    }
  }

  changeTab = (tabKey: TabKey) => {
    this.setState({
      selectedTab: tabKey
    });
  };

  render() {
    return (
      <div className='projects-wrapper'>
        <div className='portfolio-tabs'>
          <div className='portfolio-tab'>Personal</div>
          <div className='portfolio-tab'>Work</div>
        </div>
        <div className='portfolio-content'>
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
      </div>
    );
  }
}