import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contactsActions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [fetchContactsRequest]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
