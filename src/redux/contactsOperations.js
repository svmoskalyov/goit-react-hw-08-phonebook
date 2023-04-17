import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'utils/mockApi';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const contact = await API.addContactApi(data);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (state, { getState }) => {
      const { items } = getState().contacts;
      const findContact = items.find(cont => cont.name === state.name);
      const findNumber = items.find(number => number.phone === state.phone);

      if (findContact) {
        alert(`${state.name} is already in contacts`);
        return false;
      } else if (findNumber) {
        alert(`${state.phone} is already in contacts`);
        return false;
      } else {
        return true;
      }
    },
  }
);

export const getContact = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contact = await API.getContactApi();
      return contact;
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

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await API.removeContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
