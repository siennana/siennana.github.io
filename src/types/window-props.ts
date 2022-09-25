export type MusicPlayerProps = {
  top_tracks: any[],
};

export type PortfolioItemProps = {
  title: string,
  dateRange: string,
  description: string,
  skills?: string[],
}

export type WindowProps = {
  key: string,
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
  close?: (self: any) => void,
};

