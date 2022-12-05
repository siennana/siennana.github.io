import React, { Component } from 'react';
import '../pages/Desktop.css';
import { WindowProps, TabProps } from '../types/window-props';
import Window from './desktop/Window'
import WindowBar from './widgets/WindowBar';
import { portfolio, artGallery, artGalleryItem, musicPlayer, genericWindow } from '../constants/init-windows.const';
import { getTopTracks } from '../api/spotify';

import about from './desktop/about/about.md';

const tabDisplay = {
	display: 'flex',
	position: 'absolute',
	bottom: '1rem',
	left: '1rem',
	gap: '1rem',
};

type DesktopProps = {};

type DesktopState = {
  window_stack: WindowProps[],
  z_stack: string[],
  tab_stack: TabProps[],
  api_data: {
    top_tracks: any[]
  },
  date: Date
};

export default class Desktop extends Component<DesktopProps, DesktopState> {
  timer;
	constructor(props: DesktopProps) {
		super(props);
		this.state = {
			window_stack: [],
      z_stack: [],
			tab_stack: [],
			api_data: {
        top_tracks: []
      },
      date: new Date()
		}
	}

	componentDidMount() {
		getTopTracks().then(res => {
      this.setState({
        api_data: {
          top_tracks: res
        }
      });
    });

    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);

    this.addToOpenStack(genericWindow('about', about));
	}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  removeFromTabStack = (key: string): void => {
    const index = this.state.tab_stack.findIndex(obj => {
			return obj.id === key;
		});
		var copy = [...this.state.tab_stack];
		copy.splice(index, 1);
		this.setState({tab_stack: copy});
  }

	unminimize = (app: WindowProps) => {
		this.removeFromTabStack(app.id);
		this.addToOpenStack(app);
	}

	minimize = (app: WindowProps): void => {
		this.removeFromOpenStack(app.id);
    const index = this.state.tab_stack.findIndex(obj => {
			return obj.id === app.id;
		});
    if (index !== -1) { return }  // tab is already in stack
		const item = {
      minimized: true,
			unminimize: () => this.unminimize(app),
      close: () => this.removeFromTabStack(app.id),
			displayName: app.displayName,
			id: app.id
		}
		this.setState({tab_stack: [...this.state.tab_stack, item]});
	}

	removeFromOpenStack = (key: string): WindowProps => {
		const index = this.state.window_stack.findIndex(obj => {
			return obj.id === key;
		});
		if (index === -1) { return }
		var wCopy = [...this.state.window_stack];
		const removedItem  = wCopy.splice(index, 1)[0];
		this.setState({window_stack: wCopy});
    // remove from z-index array
    const zIndex = this.state.z_stack.findIndex(obj => obj === key);
    var zCopy = [...this.state.z_stack];
    zCopy.splice(zIndex, 1);
    this.setState({z_stack: zCopy});

    return removedItem;
	}

	addToOpenStack = (app: WindowProps) => {
		const index = this.state.window_stack.findIndex(obj => {
			return obj.id === app.id;
		});
		if (index !== -1) { return }
		const item = {
			...app,
			close: () => this.removeFromOpenStack(app.id),
			minimize: () => this.minimize(app),
      unminimize: () => this.unminimize(app),
      bringWindowToFront: () => this.updateZStack(app.id),
		};
		this.setState({window_stack: [...this.state.window_stack, item]});
    this.setState({z_stack: [...this.state.z_stack, item.id]});
	}

  // updates z-index of all windows with the key-window having highest z-index
  updateZStack = (key: string) => {
    var copy = [...this.state.z_stack];
    const index = copy.findIndex(obj => obj === key);
    copy.splice(index, 1);
    this.setState({z_stack: [...copy, key]});
    console.log(this.state.z_stack);
  }

	renderOpenWindows = () => {
		return this.state.window_stack.map((props, index) => {
      const windowStyle = {
        'position': 'relative',
        'zIndex': this.state.z_stack.findIndex(obj => obj === props.id),
      };
			return (
				<div style={windowStyle as React.CSSProperties} key={index}><Window {...props}/></div>
			);
		});
	}

	renderMinimizedTabs = () => {
		return this.state.tab_stack.map((props, index) => {
			return (
				<WindowBar {...props} key={index}/>
			);
		});
	}

	openGalleryItem = (imageSrc: string) => {
    this.addToOpenStack(artGalleryItem({imageSrc: imageSrc}));
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
						this.addToOpenStack(genericWindow('about', about))}>
          	<img src="/assets/images/icons/folder.png"/>
						<div className="icon-text">about</div>
					</div>
					<div className="icon" onClick={() => 
						this.addToOpenStack(artGallery({openArtGalleryItem: this.openGalleryItem}))}>
						<img src="/assets/images/icons/folder.png"/>
						<div className="icon-text">art</div>
					</div>
					<div className="icon" onClick={() => 
						this.addToOpenStack(genericWindow('terminal'))}>
          	<img src="/assets/images/icons/folder.png"/>
						<div className="icon-text">terminal</div>
					</div>
					<div className="icon" onClick={() => 
						this.addToOpenStack(portfolio())}>
						<img src="/assets/images/icons/folder.png"/>
						<div className="icon-text">projects</div>
					</div>
					<div className="icon" onClick={() => 
						this.addToOpenStack(musicPlayer(this.state.api_data))}>
						<img src="/assets/images/icons/folder.png"/>
						<div className="icon-text">music</div>
					</div>
          <div className="icon" onClick={() => 
						this.addToOpenStack(genericWindow('blog'))}>
          	<img src="/assets/images/icons/folder.png"/>
						<div className="icon-text">blog</div>
					</div>
				</div>
	
				<div className="desktop-top-bar">
					<div className="link-wrapper">
							<a href="http://github.com/siennana" target = "_blank"><img src="/assets/images/icons/github-sketchy.png"/></a>
							<a href="http://www.linkedin.com/in/siennab" target = "_blank"><img src="./assets/images/icons/linkedin-sketchy.png"/></a>
							<a href="https://open.spotify.com/user/sienna.brown-us" target="_blank"><img src="/assets/images/icons/spotify-sketchy.png"/></a>
							<a href="mailto:sienna.kaylenb@gmail.com" target="_blank"><img src="/assets/images/icons/gmail-sketchy.png"/></a>
              <div className='time'>{this.state.date.toLocaleTimeString()}</div>
					</div>
				</div>
			</div>
		);
	}
}
