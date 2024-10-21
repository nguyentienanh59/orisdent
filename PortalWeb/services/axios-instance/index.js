import axios from "axios";

const apiUrl = "https://localhost:7213/api";
const source = axios.CancelToken.source();
const instance = axios.create({
  timeout: 600000,
  baseURL: apiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  cancelToken: source.token,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
