export type MusicPlayerProps = {
  top_tracks: any[],
};

export type PortfolioItemProps = {
  title: string,
  dateRange: string,
  description: string,
  skills?: string[],
};

export type WindowProps = {
  id: string,
  size: {
    height: string,
    width: string,
  },
  position?: {
    x: number,
    y: number,
  },
  zIndex?: number | 'auto',
  content: any,
  displayName: string,
  minimize?: (self: any) => void,
  unminimize?: (self: any) => void,
  close?: (self: any) => void,
  bringWindowToFront?: (key: string) => void,
};

export type TabProps = {
  id: string,
  displayName: string,
  minimized?: boolean,
  minimize?: (self: any) => void,
  unminimize?: (self: any) => void,
  close?: (self: any) => void,
};

export type ArtGalleryProps = {
  openWindow: (imageSrc: string) => void,
};

export type ArtGalleryItemProps = {
  imageSrc: string,
};

export type TerminalProps = {
  openWindow: (key: string) => void,
}

