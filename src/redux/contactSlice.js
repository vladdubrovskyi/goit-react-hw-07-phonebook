import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsOperations,
  addContact,
  deleteContact,
} from 'redux/contactsOperations';
const initialContacts = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: initialContacts, isLoading: false, error: null },

  extraReducers: {
    [fetchContactsOperations.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContactsOperations.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },

    [fetchContactsOperations.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items.push({ ...action.payload });
      state.isLoading = false;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default contactSlice.reducer;
