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

export { getUser, getProfile };
