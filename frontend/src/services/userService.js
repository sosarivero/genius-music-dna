import api from '.';

async function getUser(id) {
  try {
    const { data } = await api.get(`/user/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getProfile(body) {
  try {
    const { data } = await api.get('/user/profile', { headers: { Authorization: `${body}` } });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function addSongToFavourites(userId, songId) {
  try {
    const response = await api.post(`/user/${userId}/addSong/${songId}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeSongFromFavourites(userId, songId) {
  try {
    const response = await api.delete(`/user/${userId}/removeSong/${songId}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

async function getUserSongRelationship(userId, songId) {
  try {
    const response = await api.get(`/user/${userId}/song/${songId}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

async function getAllFavourites(userId) {
  try {
    const response = await api.get(`/user/${userId}/favs`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export {
  getUser,
  getProfile,
  addSongToFavourites,
  removeSongFromFavourites,
  getUserSongRelationship,
  getAllFavourites,
};
