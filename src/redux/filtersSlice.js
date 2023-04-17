import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filters(_, { payload }) {
      return payload;
    },
  },
});

export const { filters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
