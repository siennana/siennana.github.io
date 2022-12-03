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
  position: {
    x: number,
    y: number,
  },
  content: any,
  displayName: string,
  minimize?: (self: any) => void,
  unminimize?: (self: any) => void,
  close?: (self: any) => void,
  bringWindowToFront?: (key: string, position: {x: number, y: number}) => void,
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
  openArtGalleryItem: (imageSrc: string) => void,
};

export type ArtGalleryItemProps = {
  imageSrc: string,
};

