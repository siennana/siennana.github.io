import '../pages/Desktop.css';
import Window from './desktop/Window'
import Portfolio from './desktop/Portfolio';
import ArtGallery from './desktop/ArtGallery'

function Desktop() {
    return (
        <div>
            <Window content={<ArtGallery/ >}/>

            <div className="desktop-icons">
                <div className="art-button icon">
                    <img src="/assets/images/icons/open-book.png"/>
                    <div className="icon-text">sketchbook</div>
                </div>
                <div className="terminal-button icon">
                    <img src="/assets/images/icons/terminal-sketchy.png"/>
                    <div className="icon-text">terminal</div>
                </div>
                <div className="projects-button icon">
                    <img src="/assets/images/icons/development-sketchy.png"/>
                    <div className="icon-text">projects</div>
                </div>
                <div className="music-button icon">
                    <img src="/assets/images/icons/turntable-sketchy.png"/>
                    <div className="icon-text">music player</div>
                </div>
            </div>

            <div id="side-info-view">
                <div className="pull-tab"></div>
                <div className="wrapper">
                    <div className="info-box">
                        <div className="date">
                            <div id="current-date">Could not get time</div>
                        </div>
                        <div className="time">
                            <div id="current-time">Could not get date</div>
                        </div>
                    </div>
                    <div className="info-box">
                        <div id="location">Could not get location information</div>
                        <div className="weather-data">
                            <div id="tempurature">Could not get tempurature</div>
                        </div>
                        <div id="weather-conditions">Could not get weather condition</div>
                    </div>
                    <div id="calendar" className="info-box"></div>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="link-wrapper">
                    <a href="http://github.com/siennana" target = "_blank"><img src="/assets/images/icons/github-sketchy.png"/></a>
                    <a href="http://www.linkedin.com/in/siennab" target = "_blank"><img src="./assets/images/icons/linkedin-sketchy.png"/></a>
                    <a href="https://open.spotify.com/user/sienna.brown-us" target="_blank"><img src="/assets/images/icons/spotify-sketchy.png"/></a>
                    <a href="mailto:sienna.kaylenb@gmail.com" target="_blank"><img src="/assets/images/icons/gmail-sketchy.png"/></a>
                </div>
            </div>
        </div>
    );
}
  
  export default Desktop;