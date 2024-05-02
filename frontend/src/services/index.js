import axios from 'axios';

const api = axios.create({
  baseURL: 'https://genius-music-dna.onrender.com/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
