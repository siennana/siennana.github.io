import '../pages/Desktop.css';
import Window from './desktop/Window'
import Tab from './widgets/Tab';
import Portfolio from './desktop/portfolio/Portfolio';
import ArtGallery from './desktop/art/ArtGallery'

const tabDisplay = {
	display: 'flex',
	position: 'absolute',
	top: '0',
	left: '8rem'
}

function Desktop() {
	return (
		<div>
			<Window content={<Portfolio/ >} descriptor='Portfolio'/>

			<div style={tabDisplay}>
				<Tab display={'Portfolio'}></Tab>
				<Tab display={'Art Gallery'}></Tab>
			</div>

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