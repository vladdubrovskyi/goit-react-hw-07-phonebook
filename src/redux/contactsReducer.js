import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './contactsActions';
import { fetchContactsOperations } from 'redux/contactsOperations';
const items = createReducer([], {
  [fetchContactsOperations.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContactsOperations.pending]: () => true,
  [fetchContactsOperations.fulfilled]: () => false,
  [fetchContactsOperations.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsOperations.rejected]: (_, action) => action.payload,
  [fetchContactsOperations.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
