
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '56000534-6fce5c682f9afcb7cf08332eb';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(BASE_URL, { params: searchParams })
    .then(response => response.data); 
}