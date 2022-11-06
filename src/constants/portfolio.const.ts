export type TabKey = 'personal' | 'work' | 'resume';

export type PortfolioObject = {
  type: TabKey,
  title: string,
  dateRange: string,
  description: string,
  source?: String,
}

export const portfolioItems: PortfolioObject[] = [
    {
      type: 'personal',
      title: "This Website",
      dateRange: "February 2020 - Current",
      description: "My portfolio website, as of today, is constructed entirely with HTML, CSS, and JavaScript. It's had many looks and phases over the years but my current objective is to create an OS-like appearance and functionality to showcase my skills. ",
      source: '/assets/images/projects/home_11_27_21.JPG',
    },
    {
      type: 'personal',
      title: "Brushed Hair Studio",
      dateRange: "February 2020 - Current",
      description: "A simple and responsive static website created for a local hair studio. ",
      source: '/assets/images/projects/tas_updated.png',
    },
    {
      type: 'personal',
      title: "Sienna Search",
      dateRange: "December 2021",
      description: "A simple search engine with web interface developed as a final project for an Information retrival class. The program crawls over 50,000 web urls and utilizes a lightweight ranking algorithm to efficiently return query results. ",
      source: '/assets/images/projects/sienna_search.JPG',
    },
    {
      type: 'work',
      title: "TiP App Stack",
      dateRange: "August 2021 - January 2022",
      description: "A .NET application developed during my time as an Applications Developer for the architecture firm CannonDesign. The app consists of a library ",
      source: '/assets/images/projects/tas_updated.png',
    },
    {
      type: 'work',
      title: 'Asset Allocation 3.0',
      dateRange: 'May 2022 - Current',
      description: 'A thing I did for work',
    }
  ];