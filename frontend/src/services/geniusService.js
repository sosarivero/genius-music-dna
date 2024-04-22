import axios from 'axios';

// const genius = axios.create({
//   baseURL: 'https://genius-song-lyrics1.p.rapidapi.com/',
//   timeout: 999999999,
//   headers: {
//     'X-RapidAPI-Key': '1de657633fmsh99f9ec4a0a16d92p154bbajsn3e5884fb6f76',
//     'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
//   },
// });

const options = {
  method: 'GET',
  url: 'https://genius-song-lyrics1.p.rapidapi.com/song/details/',
  params: { id: '2396871' },
  headers: {
    'X-RapidAPI-Key': '1de657633fmsh99f9ec4a0a16d92p154bbajsn3e5884fb6f76',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
  },
};

async function getSongById(id) {
  try {
    // const { data } = await genius.get(`/songs/${id}`);
    // console.log(data);
    // return data.response.song;
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
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

const test = await getSongById();
console.log(test.song.full_title);
export { getSongRelationships, getSongById, getSearchResults };
