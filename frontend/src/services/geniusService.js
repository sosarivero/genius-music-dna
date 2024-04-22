import axios from 'axios';

const bearerToken = '';

const genius = axios.create({
  baseURL: 'https://api.genius.com/',
  timeout: 1000,
  headers: {
    Authorization: 'Bearer Krcgk8gwVGi5nbqBFBvFsaqhNsfPXpkZa8qU-vo5WG1wRMiTW5HufgP5zJoCsfjh',
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
