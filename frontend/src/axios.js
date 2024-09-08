// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',  // Point this to your Django backend's API
});

export default instance;