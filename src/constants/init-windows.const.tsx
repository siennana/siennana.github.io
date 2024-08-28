import Portfolio from "../components/desktop/portfolio/Portfolio";
import MusicPlayer from "../components/desktop/music/MusicPlayer";
import ArtGallery from "../components/desktop/art/ArtGallery";
import ArtGalleryItem from "../components/desktop/art/ArtGalleryItem";
import GenericComponent from "../components/generic/GenericComponent";
import Terminal from "../components/desktop/terminal/Terminal";
import Cube from "../components/threejs/Cube";
import { 
  WindowProps, 
  MusicPlayerProps, 
  ArtGalleryItemProps, 
  ArtGalleryProps,
  TerminalProps
} from "../types/window-props";

export const portfolio = (props?: any): WindowProps => {
  return {
    id: 'projects',
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
    displayName: 'Projects',
  }
};

export const musicPlayer = (props: MusicPlayerProps): WindowProps => {
  return {
    id: 'music.exe',
    size: {
      height: '25rem',
      width: '35rem',
    },
    position: {
      x: 150,
      y: 150,
    },
    content: <MusicPlayer {...props}/>,
    displayName: 'music.exe',
  }
};

export const artGallery = (props?: ArtGalleryProps): WindowProps => {
  return {
    id: 'art',
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

export const terminal = (props: TerminalProps): WindowProps => {
  return {
    id: 'terminal.exe',
    size: {
      height: '20rem',
      width: '25rem',
    },
    content: <Terminal {...props}/>,
    displayName: 'terminal.exe',
  }
}

export const cube = (): WindowProps => {
  return {
    id: 'cube.exe',
    size: {
      height: '20rem',
      width: '20rem',
    },
    position: {x: 340, y: 0},
    content: <Cube />,
    displayName: 'cube.exe',
  }
};

export const genericWindow = (key: string, mdSource?: string): WindowProps => {
  const defaultContent = <div>Coming Soon!</div>
  const windowContent = 
    mdSource ? <GenericComponent markdownSource={mdSource} /> : defaultContent;
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
