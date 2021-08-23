import axios from 'axios';

export async function apiGetAllCountries() {
  const { data } = await axios.get('http://localhost:3001/countries');
  return data;
}
