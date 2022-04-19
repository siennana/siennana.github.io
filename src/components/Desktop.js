import React, { Component } from 'react';
import '../pages/Desktop.css';
import Window from './desktop/Window'
import Tab from './widgets/Tab';
import Portfolio from './desktop/portfolio/Portfolio';
import ArtGallery from './desktop/art/ArtGallery';
import MusicPlayer from './desktop/music/MusicPlayer';

const tabDisplay = {
	display: 'flex',
	position: 'absolute',
	top: '0',
	left: '8rem'
}

export default class Desktop extends Component {
	constructor() {
		super();
		this.min_stack = [];
		this.showPortfolio = false;
		this.state = {
			open_window_stack: [],
			showGallery: false,
			showMusic: false,
			showTerminal: false
		}
	}

	removeFromStack = () => {
		var copy = [...this.state.open_window_stack];
		const index = this.state.open_window_stack.findIndex(obj => {
			return obj.key === 'Portfolio';
		});
		copy.splice(index, 1);
		this.setState({open_window_stack: copy});
		console.log('removed');
	}

	addToStack = (key, content) => {
		const index = this.state.open_window_stack.findIndex(obj => {
			return obj.key === key;
		});
		if (index >= 0) { return }
		const item = {
			content: content,
			close: this.removeFromStack,
			description: key,
			key: key
		};
		this.setState({open_window_stack: [...this.state.open_window_stack, item]});
		console.log('added');
	}

	renderOpenWindows = () => {
		return this.state.open_window_stack.map((item) => (
			<Window key={item.key} content={item.content} descriptor={item.description} closewindow={item.close}/>
		));
	}

	render() {
		return (
			<div>
				{this.renderOpenWindows()}

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
					<div className="projects-button icon" onClick={() => 
						this.addToStack('Portfolio', <Portfolio/>)}>
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
}