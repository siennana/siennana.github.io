import React, { Component } from 'react';
import '../pages/Desktop.css';
import Window from './desktop/Window'
import Tab from './widgets/Tab';
import Portfolio from './desktop/portfolio/Portfolio';
import ArtGallery from './desktop/art/ArtGallery';
import MusicPlayer from './desktop/music/MusicPlayer';

import { SpotifyTracksResponseItem } from '../types/spotify';
import { getPlaylist } from '../api/spotify';

const tabDisplay = {
	display: 'flex',
	position: 'absolute',
	top: '0',
	left: '8rem'
}
const portfolio = {
	key: 'PORTFOLIO',
	content: <Portfolio/>,
	init: {
		height: '50rem',
		width: '60rem',
	}
}
const music = {
	key: 'MUSIC PLAYER',
	content: <MusicPlayer/>,
	init: {
		height: '20rem',
		width: '40rem',
	}
}
const art = {
	key: 'ART',
	content: <ArtGallery/>,
	init: {
		height: '50rem',
		width: '60rem',
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

function makeElementDraggable(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id)) {
		document.getElementById(elmnt.id + 'header').onmousedown  = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}
	function dragMouseDown (e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}
	function elementDrag (e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
		elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
	}
	function closeDragElement () {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

type DesktopProps = {}

type DesktopState = {
  open_window_stack: [],
  min_stack: [],
  showGallery: false,
  showMusic: false,
  showTerminal: false,
  api_data: {
    tracks: SpotifyTracksResponseItem[]
  }
}

export default class Desktop extends Component<DesktopProps, DesktopState> {
	constructor(props: DesktopProps) {
		super(props);
		this.state = {
			open_window_stack: [],
			min_stack: [],
			showGallery: false,
			showMusic: false,
			showTerminal: false,
			api_data: {
        tracks: []
      }
		}
	}

	componentDidMount() {
		getPlaylist().then(res => {
      console.log(res);
      this.setState({
        api_data: {
          tracks: res
        }
      });
    });
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
			descriptor: app.key,
			key: app.key
		};
		this.setState({open_window_stack: [...this.state.open_window_stack, item]});
	}

	renderOpenWindows = () => {
		return this.state.open_window_stack.map((item) => {
			return (
				<Window {...item} />
			);
		});
	}

	renderMinimizedTabs = () => {
		return this.state.min_stack.map((item) => {
			return (
				<Tab {...item} />
			);
		});
	}

	render() {
		return (
			<div>
				<div style={tabDisplay}>
					{this.renderMinimizedTabs()}
				</div>

				{this.renderOpenWindows()}
	
				<div className="desktop-icons">
					<div className="icon" onClick={() => 
						this.addToOpenStack(art)}>
						<img src="/assets/images/icons/journal.png"/>
						<div className="icon-text">art</div>
					</div>
					<div className="icon">
						<img src="/assets/images/icons/terminal.png"/>
						<div className="icon-text">terminal</div>
					</div>
					<div className="icon" onClick={() => 
						this.addToOpenStack(portfolio)}>
						<img src="/assets/images/icons/resume-and-cv.png"/>
						<div className="icon-text">projects</div>
					</div>
					<div className="icon" onClick={() => 
						this.addToOpenStack(music)}>
						<img src="/assets/images/icons/vinyl-record-player.png"/>
						<div className="icon-text">music</div>
					</div>
				</div>
	
				<div className="desktop-bottom-bar">
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