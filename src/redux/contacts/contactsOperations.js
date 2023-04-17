import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactApi,
  deleteContactApi,
} from 'services/swaggerApi';

export const getContact = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContactsApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().contacts;

      if (!items.length) return true;
      return false;
    },
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContactApi(contact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (state, { getState }) => {
      const { items } = getState().contacts;
      const findContact = items.find(cont => cont.name === state.name);
      const findNumber = items.find(num => num.number === state.number);

      if (findContact) {
        alert(`${state.name} is already in contacts`);
        return false;
      } else if (findNumber) {
        alert(`${state.number} is already in contacts`);
        return false;
      } else {
        return true;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
