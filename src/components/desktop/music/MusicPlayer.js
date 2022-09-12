import React, { Component } from 'react';
import '../../../pages/MusicPlayer.css'
import { getPlaylist } from '../../../api/spotify';

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
      },
      track: '',
    }
  }

  getPlaylistData = async () => {
    return await getPlaylist();
  };

  componentDidMount() {
    this.getPlaylistData().then(res => {
      console.log(res);
      const tracks = res.tracks.items;
      this.setState({
        track: tracks[0].track.album.name
      });
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.track}</p>
      </div>
    );
  }
}