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
    'web': [],
    'electronics': [],
    'software': [],
    'resume': []
  };
  tabItems['web'] = items.filter(item => item.type === 'web');
  tabItems['electronics'] = items.filter(item => item.type === 'electronics');
  tabItems['software'] = items.filter(item => item.type === 'software');
  return tabItems;
};

export default class Portfolio extends Component<PortfolioProps, PortfolioState> {
  constructor(props: PortfolioProps) {
    super(props);
    this.state = {
      selectedTab: 'resume',
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
          <a className='resume-link' href='./assets/PDFs/resume_4_7_26.pdf' target='_blank'>Check out my Resume</a>
          <ReactMarkdown>{this.state.resumeText}</ReactMarkdown>
        </div>
      );
    }
  };

  isSelected = (tabKey: TabKey) => this.state.selectedTab === tabKey;

  render() {
    return (
      <div className='projects-wrapper'>
        <div className='portfolio-tabs'>
          <div className={this.isSelected('web') ? 'portfolio-tab selected-tab' : 'portfolio-tab'} onClick={() => this.changeTab('web')}>Web</div>
          <div className={this.isSelected('electronics') ? 'portfolio-tab selected-tab' : 'portfolio-tab'} onClick={() => this.changeTab('electronics')}>Electronics</div>
          <div className={this.isSelected('software') ? 'portfolio-tab selected-tab' : 'portfolio-tab'} onClick={() => this.changeTab('software')}>Software</div>
          <div className={this.isSelected('resume') ? 'portfolio-tab selected-tab' : 'portfolio-tab'} onClick={() => this.changeTab('resume')}>Resume</div>
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