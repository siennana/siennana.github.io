import React, { Component } from 'react';
import '../../../pages/Portfolio.css';
import PortfolioItem from './PortfolioItem';

export default class Portfolio extends Component {
  render() {
    return (
      <div className='projects-wrapper'>
        <div className='portfolio-title-wrapper'>
          <h1 className='portfolio-header'>Hey, I'm Sienna</h1>
          <ul className="portfolio-links">
            <li><a href='./assets/PDFs/resume_4_18_22.pdf' target='_blank'>Check out my Resume</a></li>
            <li><a href='mailto:sienna.kaylenb@gmail.com'>Send me an email</a></li>
          </ul>
        </div>
        <p className="portfolio-about">I'm a software engineer who likes to make websites and games and stuff in my free time. I like simple, clean, sensible user interfaces. If you're a small business or just a person who needs a website, reach out and I'll see what I can do!</p>
        <div className='portfolio-items-wrapper'>
          <PortfolioItem {...items[0]}></PortfolioItem>
          <PortfolioItem {...items[1]}></PortfolioItem>
          <PortfolioItem {...items[2]}></PortfolioItem>
          <PortfolioItem {...items[3]}></PortfolioItem>
        </div>
      </div>
    );
  }
}
  
const items = [
  {
    title: "This Website",
    dateRange: "February 2020 - Current",
    description: "My portfolio website, as of today, is constructed entirely with HTML, CSS, and JavaScript. It's had many looks and phases over the years but my current objective is to create an OS-like appearance and functionality to showcase my skills. ",
    source: '/assets/images/projects/home_11_27_21.JPG',
  },
  {
    title: "Brushed Hair Studio",
    dateRange: "February 2020 - Current",
    description: "A simple and responsive static website created for a local hair studio. ",
    source: '/assets/images/projects/tas_updated.png',
  },
  {
    title: "Sienna Search",
    dateRange: "December 2021",
    description: "A simple search engine with web interface developed as a final project for an Information retrival class. The program crawls over 50,000 web urls and utilizes a lightweight ranking algorithm to efficiently return query results. ",
    source: '/assets/images/projects/sienna_search.JPG',
  },
  {
    title: "TiP App Stack",
    dateRange: "August 2021 - January 2022",
    description: "A .NET application developed during my time as an Applications Developer for the architecture firm CannonDesign. The app consists of a library ",
    source: '/assets/images/projects/tas_updated.png',
  },
];