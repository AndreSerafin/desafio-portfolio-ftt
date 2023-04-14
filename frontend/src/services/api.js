import axios from 'axios';

const api = axios.create({
  baseURL: 'http://25.30.107.218:3001',
});

export default api;
