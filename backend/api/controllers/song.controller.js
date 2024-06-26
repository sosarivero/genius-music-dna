const axios = require('axios');

const accessToken = process.env.GENIUS_BEARER;

const genius = axios.create({
  baseURL: 'https://api.genius.com',
  // headers: {
  //   Authorization: `Bearer ${accessToken}`,
  // },
});

async function getSongById(req, res) {
  try {
    const { data } = await genius.get(`/songs/${req.params.id}?access_token=${accessToken}`);
    if (data) {
      return res.status(200).json(data.response.song);
    } else {
      return res.status(404).send('Song not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getSearchResults(req, res) {
  try {
    const { data } = await genius.get(`/search?q=${req.params.query}&access_token=${accessToken}`);
    if (data) {
      return res.status(200).json(data.response.hits);
    } else {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getSongById, getSearchResults };
