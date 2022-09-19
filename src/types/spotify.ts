export interface SpotifyTrack {
  name: string,
  duration: string,
  albumName: string | undefined,
  artists: string[]
}

export interface SpotifyTracksResponseItem {
  track: {
    album: {
      name: string,
      artists: string[]
    },
    duration_ms: string,
    name: string,
    uri: string,
    preview_url: string,
  }
}