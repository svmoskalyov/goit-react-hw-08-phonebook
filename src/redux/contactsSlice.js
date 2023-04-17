import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContact, removeContact } from './contactsOperations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(getContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(el => el.id !== payload);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('contacts') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
