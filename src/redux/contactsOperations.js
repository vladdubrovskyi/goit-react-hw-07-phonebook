// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './contactsActions';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchContacts } from 'components/contacts-api';

// export const fetchContactsOperation = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const contacts = await fetchContacts();
//     dispatch(fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

export const fetchContactsOperations = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  }
);
