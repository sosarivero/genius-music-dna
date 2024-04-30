// Math.floor(Math.random() * 10);
async function getAlonsoAvatar(req, res) {
  try {
    return res.sendFile(`/api/utils/el_plan/${req.params.alonsoId}.png`, { root: '.' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getAlonsoAvatar };
