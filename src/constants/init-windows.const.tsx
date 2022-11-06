import Portfolio from "../components/desktop/portfolio/Portfolio";
import MusicPlayer from "../components/desktop/music/MusicPlayer";
import ArtGallery from "../components/desktop/art/ArtGallery";
import ArtGalleryItem from "../components/desktop/art/ArtGalleryItem";
import { WindowProps, MusicPlayerProps, ArtGalleryItemProps, ArtGalleryProps } from "../types/window-props";

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

export const artGallery = (props?: ArtGalleryProps): WindowProps => {
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

export const artGalleryItem = (props?: ArtGalleryItemProps): WindowProps => {
  return {
    key: props.imageSrc,
    size: {
      height: '35rem',
      width: '30rem',
    },
    position: {
      x: 0,
      y: 0,
    },
    content: <ArtGalleryItem {...props}/>,
    displayName: props.imageSrc,
  }
};
