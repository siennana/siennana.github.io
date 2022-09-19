import React, { Component } from 'react';
import '../../../pages/MusicPlayer.css'
import { getPlaylist } from '../../../api/spotify';
import { SpotifyTracksResponseItem } from '../../../types/spotify';

type MusicPlayerState = {
  id: Number,
  closed: boolean,
  minimized: boolean,
  maximized: boolean,
  parentSize: {
    height: Number,
    width: Number
  }
}

type MusicPlayerProps = {
  tracks?: SpotifyTracksResponseItem[]
}

export default class MusicPlayer extends Component<MusicPlayerProps, MusicPlayerState> {
  constructor(props: MusicPlayerProps) {
    super(props);
    this.state = {
      id: 0,
      closed: false,
      minimized: false,
      maximized: false,
      parentSize: {
        height: 0,
        width: 0
      },
    }
  }

  componentDidMount() {
    getPlaylist().then(res => {
      console.log(res);
    });
  };

  render() {
    console.log(this.props.tracks);
    //console.log(this.state.tracks[0].track.name);
    return (
      <div>
        <p>{ this.state.id.toLocaleString() }</p>
      </div>
    );
  }
}