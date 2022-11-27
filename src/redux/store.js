import { configureStore } from '@reduxjs/toolkit';
// import contactReducer from 'redux/contactSlice';
import filterReducer from 'redux/filterSlice';
import contactReducer from 'redux/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,

    // filter: '',
  },
});
