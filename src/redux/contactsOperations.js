import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contactsActions';

import { fetchContacts } from 'components/contacts-api';

export const fetchContactsOperation = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const contacts = await fetchContacts();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
