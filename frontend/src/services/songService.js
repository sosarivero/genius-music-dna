import api from '.';

// id: req.body.id,
// title: req.body.title,
// artist_names: req.body.artist_names,
// release_date_for_display: req.body.release_date_for_display,
// producer_artists: req.body.producer_artists,
// media: req.body.media,

async function saveSong(geniusSong) {
  const requestBody = {
    id: geniusSong.id,
    title: geniusSong.title,
    artist_names: geniusSong.artist_names,
    release_date_for_display: geniusSong.release_date_for_display,
  };

  try {
    const response = api.post('/saved/', requestBody);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export { saveSong };
