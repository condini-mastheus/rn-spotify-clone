import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.101.123',
});

export default api;
