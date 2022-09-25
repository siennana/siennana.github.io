import Portfolio from "../components/desktop/portfolio/Portfolio";
import MusicPlayer from "../components/desktop/music/MusicPlayer";
import ArtGallery from "../components/desktop/art/ArtGallery";
import { WindowProps, MusicPlayerProps } from "../types/window-props";

export const portfolio = (props?: any): WindowProps => {
  return {
    key: 'PORTFOLIO',
    size: {
      height: '40rem',
      width: '50rem',
    },
    position: {
      x: 0,
      y: 0,
    },
    content: <Portfolio {...props}/>,
    displayName: 'Portfolio',
  }
};

export const artGallery = (props?: any): WindowProps => {
  return {
    key: 'ARTGALLERY',
    size: {
      height: '30rem',
      width: '40rem',
    },
    position: {
      x: 0,
      y: 0,
    },
    content: <ArtGallery {...props}/>,
    displayName: 'Art Gallery',
  }
};

export const musicPlayer = (props?: MusicPlayerProps): WindowProps => {
  return {
    key: 'MUSICPLAYER',
    size: {
      height: '30rem',
      width: '40rem',
    },
    position: {
      x: 0,
      y: 0,
    },
    content: <MusicPlayer {...props}/>,
    displayName: 'Music Player',
  }
};
