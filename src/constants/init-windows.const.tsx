import Portfolio from "../components/desktop/portfolio/Portfolio";
import MusicPlayer from "../components/desktop/music/MusicPlayer";
import ArtGallery from "../components/desktop/art/ArtGallery";
import ArtGalleryItem from "../components/desktop/art/ArtGalleryItem";
import GenericComponent from "../components/generic/GenericComponent";
import Terminal from "../components/desktop/terminal/Terminal";
import Cube from "../components/threejs/Cube";
import { WindowProps, MusicPlayerProps, ArtGalleryItemProps, ArtGalleryProps } from "../types/window-props";

export const portfolio = (props?: any): WindowProps => {
  return {
    id: 'PORTFOLIO',
    size: {
      height: '40rem',
      width: '35rem',
    },
    position: {
      x: 100,
      y: 100,
    },
    zIndex: 'auto', 
    content: <Portfolio {...props}/>,
    displayName: 'Portfolio',
  }
};

export const artGallery = (props?: ArtGalleryProps): WindowProps => {
  return {
    id: 'ARTGALLERY',
    size: {
      height: '20rem',
      width: '30rem',
    },
    position: {
      x: 50,
      y: 50,
    },
    content: <ArtGallery {...props}/>,
    displayName: 'Art Gallery',
  }
};

export const musicPlayer = (props: MusicPlayerProps): WindowProps => {
  return {
    id: 'MUSICPLAYER',
    size: {
      height: '25rem',
      width: '35rem',
    },
    position: {
      x: 150,
      y: 150,
    },
    content: <MusicPlayer {...props}/>,
    displayName: 'Music Player',
  }
};

export const artGalleryItem = (props?: ArtGalleryItemProps): WindowProps => {
  return {
    id: props.imageSrc,
    size: {
      height: '25rem',
      width: '20rem',
    },
    position: {
      x: 150,
      y: 80,
    },
    content: <ArtGalleryItem {...props}/>,
    displayName: props.imageSrc,
  }
};

export const terminal = (): WindowProps => {
  return {
    id: 'TERMINAL',
    size: {
      height: '20rem',
      width: '25rem',
    },
    content: <Terminal />,
    displayName: 'terminal',
  }
}

export const cube = (): WindowProps => {
  return {
    id: 'CUBE',
    size: {
      height: '20rem',
      width: '20rem',
    },
    position: {x: 340, y: 0},
    content: <Cube />,
    displayName: 'Cube',
  }
};

export const genericWindow = (key: string, mdSource?: string): WindowProps => {
  const defaultContent = <div>Coming Soon!</div>
  const windowContent = mdSource ? <GenericComponent markdownSource={mdSource} /> : defaultContent;
  return {
    id: key,
    size: {
      height: 'auto',
      width: '20rem',
    },
    content: windowContent,
    displayName: key,
  }
};
