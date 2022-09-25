import React, { Component } from 'react';
import '../pages/Desktop.css';
import { WindowProps } from '../types/window-props';
import Window from './desktop/Window'
import Tab from './widgets/Tab';
import { portfolio, artGallery, musicPlayer } from '../constants/init-windows.const';

import { SpotifyTracksResponseItem } from '../types/spotify';
import { getPlaylist, getTopTracks } from '../api/spotify';

const tabDisplay = {
	display: 'flex',
	position: 'absolute',
	top: '0',
	left: '8rem'
}

type TabObject = {
  key: string,
  displayName: string,
  unminimize: () => void
}

type DesktopProps = {}

type DesktopState = {
  window_stack: WindowProps[],
  tab_stack: TabObject[],
  api_data: {
    top_tracks: any[]
  }
}

export default class Desktop extends Component<DesktopProps, DesktopState> {
	constructor(props: DesktopProps) {
		super(props);
		this.state = {
			window_stack: [],
			tab_stack: [],
			api_data: {
        top_tracks: []
      }
		}
	}

	componentDidMount() {
		getTopTracks().then(res => {
      console.log(res);
      this.setState({
        api_data: {
          top_tracks: res
        }
      });
    });
	}

	unminimize = (app: WindowProps) => {
		const index = this.state.tab_stack.findIndex(obj => {
			return obj.key === app.key;
		});
		var copy = [...this.state.tab_stack];
		copy.splice(index, 1);
		this.setState({tab_stack: copy});
		this.addToOpenStack(app);
	}

	minimize = (app: WindowProps): void => {
		this.removeFromOpenStack(app.key);
    const index = this.state.tab_stack.findIndex(obj => {
			return obj.key === app.key;
		});
    if (index !== -1) { return; }  // tab is already in stack
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

  getWindow = (app: WindowProps): WindowProps => {
    return {
      ...app,
      minimize: () => this.minimize(app),
      close: () => this.removeFromOpenStack(app.key)
    }
  }

	addToOpenStack = (app: WindowProps) => {
		const index = this.state.window_stack.findIndex(obj => {
			return obj.key === app.key;
		});
		if (index !== -1) { return }
		const item = {
			...app,
			close: () => this.removeFromOpenStack(app.key),
			minimize: () => this.minimize(app),
		};
		this.setState({window_stack: [...this.state.window_stack, item]});
	}

	renderOpenWindows = () => {
		return this.state.window_stack.map((props) => {
			return (
				<Window {...props} />
			);
		});
	}

	renderMinimizedTabs = () => {
		return this.state.tab_stack.map((props) => {
			return (
				<Tab {...props} />
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
						this.addToOpenStack(artGallery())}>
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
						this.addToOpenStack(musicPlayer(this.state.api_data))}>
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