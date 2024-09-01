import Portfolio from "../components/desktop/portfolio/Portfolio";
import MusicPlayer from "../components/desktop/music/MusicPlayer";
import GenericComponent from "../components/generic/GenericComponent";
import Terminal from "../components/desktop/terminal/Terminal";
import GenericFileWindow from '../components/generic/GenericFileWindow';
import GenericImgWindow from '../components/generic/GenericImgWindow';
import Cube from "../components/threejs/Cube";
import { 
  WindowProps, 
  MusicPlayerProps, 
  TerminalProps,
  FileWindowProps,
  ImageWindowProps,
} from "../types/window-props";
import React from 'react';

function genericProps<E> (
  key: string, 
  component: any,
  props: E,
  overrides?: Partial<WindowProps>,
): WindowProps {
  return {
    id: key,
    style: {
      height: 'auto',
      width: '20rem',
    },
    content: React.createElement(component, props),
    displayName: key
  }
};

export const genericFileWindow = (key: string, props: FileWindowProps): WindowProps => {
  return genericProps<FileWindowProps>(key, GenericFileWindow, props);
};

export const genericImageWindow = (key: string, props: ImageWindowProps): WindowProps => {
  return genericProps<ImageWindowProps>(key, GenericImgWindow, props);
};

export const genericWindow = (key: string, mdSource?: string): WindowProps => {
  const defaultContent = <div>Coming Soon!</div>
  const windowContent = 
    mdSource ? <GenericComponent markdownSource={mdSource} /> : defaultContent;
  return {
    id: key,
    style: {
      height: 'auto',
      width: '20rem',
    },
    content: windowContent,
    displayName: key,
  }
};

export const portfolio = (props?: any): WindowProps => {
  return {
    id: 'projects',
    style: {
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
    style: {
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

export const terminal = (props: TerminalProps): WindowProps => {
  return {
    id: 'terminal.exe',
    style: {
      height: '20rem',
      width: '25rem',
    },
    content: <Terminal {...props}/>,
    displayName: 'terminal.exe',
  }
}

export const cube = (): WindowProps => {
  return {
    id: 'cube_rotate.exe',
    style: {
      height: '20rem',
      width: '20rem',
    },
    position: {x: 340, y: 0},
    content: <Cube />,
    displayName: 'cube.exe',
  }
};

