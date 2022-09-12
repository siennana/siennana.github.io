import { post , get} from 'axios';
import { stringify } from 'qs';
import { Buffer } from 'buffer';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');


export const getSpotifyAuth = async () => {
  try{
    console.log(process.env);
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = stringify({'grant_type':'client_credentials'});

    const response = await post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    });
    //return access token
    return response.data.access_token;   
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
}

const playlist_id = '6Y3I7PHLAA3ExXzJdBh8rL';

export const getPlaylist = async () => {
  try {
    const auth_token = await getSpotifyAuth();
    //get request to SPOTIFY API to access playlist
    const playlist_url = 'https://api.spotify.com/v1/users/' + `${client_id}/playlists/${playlist_id}/?limit=10`;

    const response = await get(playlist_url, {
      headers: { 
        'Authorization': `Bearer ${auth_token}`,
        'Accept': 'application/json' 
      }
    });
    //return playlist
    console.log(response.data.tracks);
    return response.data;
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
};
