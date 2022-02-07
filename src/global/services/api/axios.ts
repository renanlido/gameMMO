import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_RAPID_API_HOST || '',
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_X_RAPID_API_HOST || '',
    'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY || '',
    'Content-type': 'application/json'
  }
});
