import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = "https://be-day.kailearndev.io.vn/";
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor
api.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${Cookies.get('access_token')}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }

);

export default api;