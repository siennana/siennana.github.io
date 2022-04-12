import '../../pages/Portfolio.css';

function Portfolio() {
    return (
        <div className='projects-wrapper'>
            <ul>
                <li>
                    <div className="project">
                        <div className="content-wrapper">
                        <div className="data-wrapper">
                            <div className="text">
                                <h1>This Website</h1>
                                <div className="date">February 2020 - Current</div>
                                <div className="description">
                                    My portfolio website, as of today, is constructed entirely with HTML, CSS, and JavaScript. It's had many
                                    looks and phases over the years but my current objective is to create an OS-like appearance and functionality to showcase my skills.
                                </div>
                            </div>
                            <div className="skills">
                                <ul>
                                    <li><a href="https://github.com/siennana/siennana.github.io" target="_blank"><i className="fab fa-2x fa-github"></i></a></li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Git</li>
                                    <li>VS Code</li>
                                </ul>
                            </div>
                        </div>
                        <div className="image-wrapper">
                            <img src="/assets/images/projects/home_11_27_21.JPG"/>
                        </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="project">
                        <div className="content-wrapper">
                            <div className="data-wrapper">
                                <div className="text">
                                    <h1>Brushed Hair Studio</h1>
                                    <div className="date">February 2020 - Current</div>
                                    <div className="description">
                                        A simple and responsive static website created for a local hair studio.
                                    </div>
                                </div>
                                <div className="skills">
                                    <ul>
                                        <li><a href="https://github.com/siennana/siennana.github.io" target="_blank"><i className="fab fa-2x fa-github"></i></a></li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Git</li>
                                        <li>VS Code</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-wrapper">
                                <img src="https://source.unsplash.com/gE1phX0Lbos"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="project">
                        <div className="content-wrapper">
                            <div className="data-wrapper">
                                <div className="text">
                                    <h1>Sienna Search</h1>
                                    <div className="date">December 2021</div>
                                    <div className="description">
                                        A simple search engine with web interface developed as a final project for an Information retrival className.
                                        The program crawls over 50,000 web urls and utilizes a lightweight ranking algorithm to efficiently
                                        return query results.
                                    </div>
                                </div>
                                <div className="skills">
                                    <ul>
                                        <li><a href="https://github.com/siennana/siennana.github.io" target="_blank"><i className="fab fa-2x fa-github"></i></a></li>
                                        <li>Python</li>
                                        <li>Flask</li>
                                        <li>HTML/CSS</li>
                                        <li>Git</li>
                                        <li>VS Code</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-wrapper">
                                <img src="/assets/images/projects/sienna_search.JPG"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="project">
                        <div className="content-wrapper">
                            <div className="data-wrapper">
                                <div className="text">
                                    <h1>TiP App Stack</h1>
                                    <div className="date">August 2021 - January 2022</div>
                                    <div className="description">
                                        A .NET application developed during my time as an Applications Developer for the architecture firm CannonDesign.
                                        The app consists of a library 
                                    </div>
                                </div>
                                <div className="skills">
                                    <ul>
                                        <li><a href="https://github.com/siennana/siennana.github.io" target="_blank"><i className="fab fa-2x fa-github"></i></a></li>
                                        <li>.NET Core</li>
                                        <li>wpf</li>
                                        <li>C#</li>
                                        <li>Git</li>
                                        <li>Visual Studio</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-wrapper">
                                <img src="/assets/images/projects/tas_updated.png"/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
  
  export default Portfolio;