import axios from 'axios';

const genius = axios.create({
  baseURL: 'https://api.genius.com',
  timeout: 999999999,
  headers: {
    Authorization: 'Bearer Krcgk8gwVGi5nbqBFBvFsaqhNsfPXpkZa8qU-vo5WG1wRMiTW5HufgP5zJoCsfjh',
    'Access-Control-Allow-Origin': '*',
  },
});

async function getSongById(id) {
  try {
    const { data } = await genius.get(`/songs/${id}`);
    console.log(data);
    return data.response.song;
  } catch (error) {
    console.log(error);
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

console.log(await getSongById(233));

export { getSongRelationships, getSongById, getSearchResults };
