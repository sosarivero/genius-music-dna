import axios from 'axios';

const genius = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

async function getSongById(id) {
  try {
    const { data } = await genius.get(`/songs/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getSearchResults(query) {
  try {
    const { data } = await genius.get(`/songs/search/${query}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export { getSongById, getSearchResults };
