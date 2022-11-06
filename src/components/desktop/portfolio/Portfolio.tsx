import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import '../../../pages/Portfolio.css';
import resume from './resume.md';
import PortfolioItem from './PortfolioItem';
import { portfolioItems, PortfolioObject, TabKey } from '../../../constants/portfolio.const';

type PortfolioState = {
  selectedTab: TabKey,
  portfolioTabItems: Record<TabKey, PortfolioObject[]>,
  resumeText: string
};

type PortfolioProps = {};

const getPortfolioItemsByTab = (items: PortfolioObject[]): Record<TabKey, PortfolioObject[]> => {
  let tabItems: Record<TabKey, PortfolioObject[]> = {
    'personal': [],
    'work': [],
    'resume': []
  };
  tabItems['personal'] = items.filter(item => item.type === 'personal');
  tabItems['work'] = items.filter(item => item.type === 'work');
  return tabItems;
};

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
  constructor(props: PortfolioProps) {
    super(props);
    this.state = {
      selectedTab: 'personal',
      portfolioTabItems: getPortfolioItemsByTab(portfolioItems),
      resumeText: ''
    }
  }

  componentDidMount() {
    fetch(resume).then(res => res.text()).then(text => this.setState({resumeText: text}));
	};

  changeTab = (tabKey: TabKey) => {
    this.setState({
      selectedTab: tabKey
    });
  };

  showResume = () => {
    if (this.state.selectedTab === 'resume') {
      return (
        <div>
          <a className='resume-link' href='./assets/PDFs/resume_4_18_22.pdf' target='_blank'>Check out my Resume</a>
          <ReactMarkdown>{this.state.resumeText}</ReactMarkdown>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='projects-wrapper'>
        <div className='portfolio-tabs'>
          <div className='portfolio-tab' onClick={() => this.changeTab('personal')}>Personal</div>
          <div className='portfolio-tab' onClick={() => this.changeTab('work')}>Work</div>
          <div className='portfolio-tab' onClick={() => this.changeTab('resume')}>Resume</div>
        </div>
        <div className='portfolio-content'>
          {this.showResume()}
          <div className='portfolio-items-wrapper'>
            {this.state.portfolioTabItems[this.state.selectedTab].map((value, index) => {
                return (<PortfolioItem key={index} {...value}></PortfolioItem>)
            })}
          </div>
        </div>
      </div>
    );
  }
}