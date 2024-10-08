import classNames from 'classnames';
import React, { Component, createRef, RefObject } from 'react';
import { MusicPlayerProps } from '../../../types/window-props';
import '../../../pages/MusicPlayer.css'

type MusicPlayerState = {
  currentSongData: any,
  errorMessage: string,
};

export default class MusicPlayer extends Component<MusicPlayerProps, MusicPlayerState> {
  private audioRef: RefObject<HTMLAudioElement>;
  constructor(props: MusicPlayerProps) {
    super(props);
    this.state = {
      currentSongData: props.top_tracks.length > 0 ? props.top_tracks[0] : undefined,
      errorMessage: props.top_tracks.length > 0 ? 
        '' : 'there was an error fetching song titles',
    };
    this.audioRef = createRef();
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSongData.preview_url !== this.state.currentSongData.preview_url
    && this.audioRef.current) {
      this.audioRef.current.load();
    }
  };


  onSelectSong = (index: number) => {
    this.setState({currentSongData: this.props.top_tracks[index]});
  }

  songSelected = (index: number): boolean => {
    return this.state.currentSongData.id === this.props.top_tracks[index].id;
  }

  renderMusicPanel = () => {
    return (
      <div className='music-player'>
        <div className='music-left-panel'>
          <div className='music-player-title'>Spotify Top Tracks</div>
          <div className='song-list-panel'>
            <ol>
              {this.props.top_tracks.map((value, index) => {
                return (
                  <li 
                    className={classNames({'song-selected' : this.songSelected(index)})} 
                    onClick={() => this.onSelectSong(index)}
                    onTouchStart={() => this.onSelectSong(index)}
                    key={index}>
                      {value.name}
                  </li>
                )
              })}
            </ol>
          </div>
          <div className='music-player-controls'>
            <audio ref={this.audioRef} controls key={this.state.currentSongData.preview_url}>
              <source src={this.state.currentSongData.preview_url} type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div className='music-play-panel'>
          <div className='music-album-cover'>
            <img src={this.state.currentSongData.album.images[0].url}/>
          </div>
          <div className='song-info'>
            <div>Artist: {this.state.currentSongData.artists[0].name}</div>
            <div>Album: {this.state.currentSongData.album.name}</div>
            <div>Release: {this.state.currentSongData.album.release_date}</div>
          </div>
          <div className='music-controls'>
            <a 
              className='music-button' 
              href={this.state.currentSongData.uri}>
                Listen on Spotify
            </a>
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
