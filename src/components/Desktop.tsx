import React, { Component } from 'react';
import '../pages/Desktop.css';
import Window from './desktop/Window'
import Tab from './widgets/Tab';
import Portfolio from './desktop/portfolio/Portfolio';
import ArtGallery from './desktop/art/ArtGallery';
import MusicPlayer from './desktop/music/MusicPlayer';

import { SpotifyTracksResponseItem } from '../types/spotify';
import { getPlaylist, getTopTracks } from '../api/spotify';

const tabDisplay = {
	display: 'flex',
	position: 'absolute',
	top: '0',
	left: '8rem'
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

type WindowObject = {
  key: string,
  height: string,
  width: string,
  displayName: string,
  content: any,
  minimize?: (app: any) => void,
  close?: (app: any) => void,
  props?: any
}

type TabObject = {
  key: string,
  displayName: string,
  unminimize: () => void
}

type DesktopProps = {}

type DesktopState = {
  window_stack: WindowObject[],
  tab_stack: TabObject[],
  api_data: {
    tracks: SpotifyTracksResponseItem[]
  }
}

const portfolio = (props?: any): WindowObject => {
  return {
    key: 'PORTFOLIO',
    content: <Portfolio {...props}/>,
    height: '50rem',
    width: '60rem',
    displayName: 'Portfolio',
  }
}
type MusicPlayerProps = {
  tracks: SpotifyTracksResponseItem[]
}
const music = (props: MusicPlayerProps): WindowObject => {
  console.log(props);
  return {
    key: 'MUSIC PLAYER',
    content: <MusicPlayer {...props}/>,
    height: '20rem',
    width: '40rem',
    displayName: 'Music Player',
  }
}
const art = (props?: any): WindowObject => {
  return {
    key: 'ART',
    content: <ArtGallery {...props}/>,
    height: '50rem',
    width: '60rem',
    displayName: 'Art Gallery',
  }
}

export default class Desktop extends Component<DesktopProps, DesktopState> {
	constructor(props: DesktopProps) {
		super(props);
		this.state = {
			window_stack: [],
			tab_stack: [],
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

	unminimize = (app: WindowObject) => {
		const index = this.state.tab_stack.findIndex(obj => {
			return obj.key === app.key;
		});
		var copy = [...this.state.tab_stack];
		copy.splice(index, 1);
		this.setState({tab_stack: copy});
		this.addToOpenStack(app);
	}

	addToMinStack = (app: WindowObject): void => {
		this.removeFromOpenStack(app.key);
		const item = {
			unminimize: () => this.unminimize(app),
			displayName: app.displayName,
			key: app.key
		}
		this.setState({tab_stack: [...this.state.tab_stack, item]});
	}

	removeFromOpenStack = (key: string) => {
		const index = this.state.window_stack.findIndex(obj => {
			return obj.key === key;
		});
		if (index === -1) { return }
		var copy = [...this.state.window_stack];
		copy.splice(index, 1);
		this.setState({window_stack: copy});
	}

  getWindow = (app: WindowObject): WindowObject => {
    return {
      ...app,
      minimize: () => this.addToMinStack(app),
      close: () => this.removeFromOpenStack(app.key)
    }
  }

	addToOpenStack = (app: WindowObject) => {
		const indexO = this.state.window_stack.findIndex(obj => {
			return obj.key === app.key;
		});
		if (indexO >= 0) { return }
		const item = {
			...app,
			close: () => this.removeFromOpenStack(app.key),
			minimize: () => this.addToMinStack(app),
		};
		this.setState({window_stack: [...this.state.window_stack, item]});
	}

	renderOpenWindows = () => {
		return this.state.window_stack.map((item) => {
			return (
				<Window {...item} />
			);
		});
	}

	renderMinimizedTabs = () => {
		return this.state.tab_stack.map((item) => {
			return (
				<Tab {...item} />
			);
		});
	}

	render() {
		return (
			<div>
				<div style={tabDisplay as React.CSSProperties}>
					{this.renderMinimizedTabs()}
				</div>

				{this.renderOpenWindows()}
	
				<div className="desktop-icons">
					<div className="icon" onClick={() => 
						this.addToOpenStack(art())}>
						<img src="/assets/images/icons/journal.png"/>
						<div className="icon-text">art</div>
					</div>
					<div className="icon">
						<img src="/assets/images/icons/terminal.png"/>
						<div className="icon-text">terminal</div>
					</div>
					<div className="icon" onClick={() => 
						this.addToOpenStack(portfolio())}>
						<img src="/assets/images/icons/resume-and-cv.png"/>
						<div className="icon-text">projects</div>
					</div>
					<div className="icon" onClick={() => 
						this.addToOpenStack(music(this.state.api_data))}>
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