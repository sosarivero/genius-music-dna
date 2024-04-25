import api from '.';

async function signUp(signUpData) {
  try {
    const { data } = await api.post('/auth/signup', signUpData);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function signIn(logInData) {
  try {
    const { data } = await api.post('/auth/login', logInData);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export { signUp, signIn };
