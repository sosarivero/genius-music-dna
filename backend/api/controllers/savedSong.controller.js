import SavedSong from '../models/savedSong.model';

async function getSavedSong(req, res) {
  try {
    const foundSong = await SavedSong.findByPk(req.params.id);
    if (savedSong) {
      return res.status(200).json(foundSong);
    } else {
      return res.status(200).send('No song found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createSavedSong(req, res) {
  try {
    const createdSong = await SavedSong.create({
      id: req.body.id,
      title: req.body.title,
      artist_names: req.body.artist_names,
      release_date_for_display: req.body.release_date_for_display,
      producer_artists: req.body.producer_artists,
      media: req.body.media,
    });
    return res.status(200).json({ message: 'Song saved', song: createdSong });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteSavedSong(req, res) {
  try {
    const deletedSong = await SavedSong.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedSong) {
      return res.status(200).json('Song unsaved');
    } else {
      return res.status(404).send('Song not found');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getSavedSong,
  createSavedSong,
  deleteSavedSong,
};
