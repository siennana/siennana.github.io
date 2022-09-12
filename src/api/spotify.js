import { post } from 'axios';
import { stringify } from 'qs';
import { Buffer } from 'buffer';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');


export const getSpotifyAuth = async () => {
  try{
    console.log(client_id);
    console.log(client_secret);
    console.log(process.env);
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = stringify({'grant_type':'client_credentials'});

    const response = await post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    console.log(response.data.access_token);
    return response.data.access_token;   
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
}
