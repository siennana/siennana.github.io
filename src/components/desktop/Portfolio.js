import '../../pages/Portfolio.css';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return (
    <div className='projects-wrapper'>
      <div className='portfolio-skills'>
        <img src='/assets/images/icons/64px-JavaScript-logo.png'/>
        <img src='/assets/images/icons/html-5.png'/>
        <img src='/assets/images/icons/css-3.png'/>
        <img src='/assets/images/icons/node-js.png'/>
        <img src='/assets/images/icons/react.png'/>
        <img src='/assets/images/icons/c_plus_plus.png'/>
        <img src='/assets/images/icons/c_sharp.png'/>
        <img src='/assets/images/icons/python.png'/>
      </div>
      <h1 className='portfolio-header'>Hey, I'm Sienna</h1>
      <p className="portfolio-about">I'm a software engineer who likes to make websites and games and stuff in my free time. I like simple, clean, sensible user interfaces. If you're a small business or just a person who needs a website, reach out and I'll see what I can do!</p>
      <ul className="portfolio-links">
        <li><a href='#'>Check out my Resume</a></li>
        <li><a href='#'>Send me an email</a></li>
      </ul>
      <ul>
        <li><PortfolioItem title={items[0].title} dateRange={items[0].dateRange} description={items[0].description}></PortfolioItem></li>
        <li><PortfolioItem title={items[1].title} dateRange={items[1].dateRange} description={items[1].description}></PortfolioItem></li>
        <li><PortfolioItem title={items[2].title} dateRange={items[2].dateRange} description={items[2].description}></PortfolioItem></li>
        <li><PortfolioItem title={items[3].title} dateRange={items[3].dateRange} description={items[3].description}></PortfolioItem></li>
      </ul>
    </div>
  );
}
  
export default Portfolio;

const items = [
  {
    title: "This Website",
    dateRange: "February 2020 - Current",
    description: "My portfolio website, as of today, is constructed entirely with HTML, CSS, and JavaScript. It's had many looks and phases over the years but my current objective is to create an OS-like appearance and functionality to showcase my skills. ",
  },
  {
    title: "Brushed Hair Studio",
    dateRange: "February 2020 - Current",
    description: "A simple and responsive static website created for a local hair studio. ",
  },
  {
    title: "Sienna Search",
    dateRange: "December 2021",
    description: "A simple search engine with web interface developed as a final project for an Information retrival class. The program crawls over 50,000 web urls and utilizes a lightweight ranking algorithm to efficiently return query results. ",
  },
  {
    title: "TiP App Stack",
    dateRange: "August 2021 - January 2022",
    description: "A .NET application developed during my time as an Applications Developer for the architecture firm CannonDesign. The app consists of a library ",
  },
];