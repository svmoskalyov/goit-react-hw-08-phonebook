import axios from 'axios';

axios.defaults.baseURL = 'https://642989c25a40b82da4d51082.mockapi.io';

export const addContactApi = async values => {
  const response = await axios.post('/contacts', values);
  return response.data;
};

export const getContactApi = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const removeContactApi = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
