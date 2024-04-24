import api from '.';

async function signUp(signUpData) {
  try {
    const { data } = await api.post('/auth/signup', signUpData);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default signUp;
