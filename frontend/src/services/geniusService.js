import api from '.';

async function getSongById(id) {
  try {
    const { data } = await api.get(`/songs/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getSearchResults(query) {
  try {
    const { data } = await api.get(`/songs/search/${query}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export { getSongById, getSearchResults };
