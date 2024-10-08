import axios from 'axios';
import { stringify } from 'qs';
import { Buffer } from 'buffer';
import { SpotifyTracksResponseItem } from '../types/spotify';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const auth_token = 
  Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

/**
* returns spotify authentification token (client credentials flow)
*/
export const getSpotifyAuth = async () => {
  try{
    // make post request to SPOTIFY API for access token, sending relavent info
    const data = stringify({'grant_type':'client_credentials'});

    const response = await axios.post(SPOTIFY_TOKEN_URL, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    });
    // return access token
    return response.data.access_token;
  } catch (error){
    console.log(error);
  }
};

/**
* returns a refreshed access token (authorization code flow)
*/
export const getRefreshToken = async () => {
  try {
    const data = stringify({
      'grant_type':'refresh_token',
      'refresh_token':`${refresh_token}`
    });

    const response = await axios.post(SPOTIFY_TOKEN_URL, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      },
    });
    // return access token
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const playlist_id = '6Y3I7PHLAA3ExXzJdBh8rL';

// returns data from a specified playlist id
export const getPlaylist = async (): Promise<SpotifyTracksResponseItem[]> => {
  try {
    const auth_token = await getRefreshToken();
    //get request to SPOTIFY API to access playlist
    const playlist_url = `https://api.spotify.com/v1/users/${client_id}/playlists/${playlist_id}/tracks`;

    const response = await axios.get(playlist_url, {
      headers: { 
        'Authorization': `Bearer ${auth_token}`,
        'Accept': 'application/json' 
      },
      params: {
        'fields': 'items(track(name,duration_ms,uri,preview_url,album(name,artists)))',
        'limit': '10'
      }
    });
    // return playlist
    const data = response.data.items as SpotifyTracksResponseItem[];
    return data;

  } catch (error) {
    console.log(error);
  }
};

/**
 * requires auth scope user-top-read
 */
export const getTopTracks = async (): Promise<any> => {
  try {
    const auth_token = await getRefreshToken();
    //get request to SPOTIFY API to access playlist
    const top_tracks_url = 'https://api.spotify.com/v1/me/top/tracks';

    const response = await axios.get(top_tracks_url, {
      headers: { 
        'Authorization': `Bearer ${auth_token}`,
        'Content-Type': 'application/json' 
      },
      params: {
        'limit': '10',
        'time_range': 'short_term'
      }
    });
    //return tracks
    const data = response.data.items as SpotifyTracksResponseItem[];
    return data;

  } catch (error) {
    console.log(error);
    return [];
  }
};
