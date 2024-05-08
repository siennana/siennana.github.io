import classNames from 'classnames';
import React, { Component } from 'react';
import { MusicPlayerProps } from '../../../types/window-props';
import '../../../pages/MusicPlayer.css'

type MusicPlayerState = {
  currentSongData: any,
  errorMessage: string,
};

export default class MusicPlayer extends Component<MusicPlayerProps, MusicPlayerState> {
  constructor(props: MusicPlayerProps) {
    super(props);
    this.state = {
      currentSongData: props.top_tracks.length > 0 ? props.top_tracks[0] : undefined,
      errorMessage: props.top_tracks.length > 0 ? '' : 'there was an error fetching song titles',
    }
  }

  onSelectSong = (index: number) => {
    this.setState({currentSongData: this.props.top_tracks[index]});
  }

  songSelected = (index: number): boolean => {
    return this.state.currentSongData.id === this.props.top_tracks[index].id;
  }

  renderMusicPanel = () => {
    return (
      <div className='music-player'>
        <div className='song-list-panel'>
          <div className='music-player-title'>My Top Songs</div>
          <ol>
            {this.props.top_tracks.map((value, index) => {
              return (
                <li className={classNames({'song-selected' : this.songSelected(index)})} onClick={() => this.onSelectSong(index)} key={index}><div>{value.name}</div></li>
              )
            })}
          </ol>
        </div>
        <div className='music-play-panel'>
          {this.state.currentSongData.name}
          <div className='music-album-cover'>
            <img src={this.state.currentSongData.album.images[0].url}/>
          </div>
          <div className='song-info'>
            <div>Artist: {this.state.currentSongData.artists[0].name}</div>
            <div>Album Name: {this.state.currentSongData.album.name}</div>
            <div>Album Release Date: {this.state.currentSongData.album.release_date}</div>
          </div>
          <div className='music-controls'>
            <a className='music-button' href={this.state.currentSongData.uri}>Listen on Spotify</a>
          </div>
        </div>
      </div>
    );
  };

  render() {
    if (this.state.currentSongData) {
      return (
        <div>{this.renderMusicPanel()}</div>
      );
    } else {
      return (
        <div>{this.state.errorMessage}</div>
      );
    }
  }
}
