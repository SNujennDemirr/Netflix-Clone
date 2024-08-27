// src/api/index.js
import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

// Örnek API istemcisi
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export default apiClient;
