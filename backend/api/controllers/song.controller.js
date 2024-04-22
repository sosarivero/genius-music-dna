const axios = require('axios');

const accessToken = 'Krcgk8gwVGi5nbqBFBvFsaqhNsfPXpkZa8qU-vo5WG1wRMiTW5HufgP5zJoCsfjh';

const genius = axios.create({
  baseURL: 'https://api.genius.com',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

async function getSongById(req, res) {
  try {
    const { data } = await genius.get(`/songs/${req.params.id}`);
    console.log(await data);
    if (data) {
      return res.status(200).send(data.response.song);
    } else {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getSongById };
