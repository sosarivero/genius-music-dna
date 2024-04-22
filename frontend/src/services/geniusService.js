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

async function getSongRelationships(id) {
  try {
    const { data } = await genius.get(`/songs/${id}`);
    return data.song_relationships;
  } catch (error) {
    console.log(error.message);
  }
}

async function getSearchResults(query) {
  try {
    const { data } = await genius.get(`/search?q=${query}`);
    return data.response.hits;
  } catch (error) {
    console.log(error.message);
  }
}

export { getSongRelationships, getSongById, getSearchResults };
