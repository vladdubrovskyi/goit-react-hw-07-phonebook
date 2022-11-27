import axios from 'axios';
axios.defaults.baseURL = 'https://638389636e6c83b7a996238f.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('contacts');
  return data;
}
