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
const portfolio = {
	key: 'Portfolio',
	content: <Portfolio/>,
	init: {
		height: '50rem',
		width: '50rem',
	}
}
const music = {
	key: 'Music Player',
	content: <MusicPlayer/>,
	init: {
		height: '20rem',
		width: '40rem',
	}
}

const terminal = {
	key: 'Command Line',
	content: <MusicPlayer/>,
	init: {
		height: '25rem',
		width: '40rem',
	}
}
//TODO make types and stuff
export default class Desktop extends Component {
	constructor() {
		super();
		this.state = {
			open_window_stack: [],
			min_stack: [],
			showGallery: false,
			showMusic: false,
			showTerminal: false
		}
	}

	unMinimize = (app) => {
		const index = this.state.min_stack.findIndex(obj => {
			return obj.key === app.key;
		});
		var copy = [...this.state.min_stack];
		copy.splice(index, 1);
		this.setState({min_stack: copy});
		console.log(this.state.min_stack);
		this.addToOpenStack(app);
	}

	addToMinStack = (app) => {
		this.removeFromOpenStack(app);
		const item = {
			unMinimize: () => this.unMinimize(app),
			display: app.key,
			key: app.key
		}
		this.setState({min_stack: [...this.state.min_stack, item]});
	}

	removeFromOpenStack = (app) => {
		const index = this.state.open_window_stack.findIndex(obj => {
			return obj.key === app.key;
		});
		console.log(index);
		if (index === -1) { return }
		var copy = [...this.state.open_window_stack];
		copy.splice(index, 1);
		this.setState({open_window_stack: copy});
	}

	addToOpenStack = (app) => {
		const indexO = this.state.open_window_stack.findIndex(obj => {
			return obj.key === app.key;
		});
		if (indexO >= 0) { return }
		const item = {
			content: app.content,
			height: app.init.height,
			width: app.init.width,
			close: () => this.removeFromOpenStack(app),
			minimize: () => this.addToMinStack(app),
			description: app.key,
			key: app.key
		};
		this.setState({open_window_stack: [...this.state.open_window_stack, item]});
	}

	renderOpenWindows = () => {
		return this.state.open_window_stack.map((item) => (
			<Window {...item}/>
		));
	}

	renderMinimizedTabs = () => {
		return this.state.min_stack.map((item) => (
			<Tab display={item.display} unMinimize={item.unMinimize}/>
		));
	}

	render() {
		return (
			<div>
				<div style={tabDisplay}>
					{this.renderMinimizedTabs()}
				</div>

				{this.renderOpenWindows()}
	
				<div className="desktop-icons">
					<div className="terminal-button icon">
						<img src="/assets/images/icons/terminal-sketchy.png"/>
						<div className="icon-text">terminal</div>
					</div>
					<div className="projects-button icon" onClick={() => 
						this.addToOpenStack(portfolio)}>
						<img src="/assets/images/icons/development-sketchy.png"/>
						<div className="icon-text">projects</div>
					</div>
					<div className="music-button icon" onClick={() => 
						this.addToOpenStack(music)}>
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