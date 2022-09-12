import React, { Component } from 'react';
import '../../../pages/MusicPlayer.css'
import { getSpotifyAuth } from '../../../api/spotify';

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.id = 1;
    this.state = {
      closed: false,
      minimized: false,
      maximized: false,
      parentSize: {
        height: 100,
        width: 100
      }
    }
  }

  componentDidMount() {
    getSpotifyAuth();
  };

  render() {
    return (
      <div>Music Player Coming Soon</div>
    );
  }
}