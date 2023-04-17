import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// User
export const registerUserApi = async ({ name, email, password }) => {
  const res = await axios
    .post('/users/signup', {
      name,
      email,
      password,
    })
    .then(({ data: { user, token } }) => ({
      user,
      token,
    }));

  token.set(res.token);
  return res;
};

export const loginUserApi = async ({ email, password }) => {
  const res = await axios
    .post('/users/login', {
      email,
      password,
    })
    .then(({ data: { user, token } }) => ({
      user,
      token,
    }));

  token.set(res.token);
  return res;
};

export const logoutUserApi = async () => {
  await axios.post('/users/logout');
  token.unset();
};

export const refreshUserApi = async persistedToken => {
  token.set(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};

// Contact
export const getContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContactApi = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
