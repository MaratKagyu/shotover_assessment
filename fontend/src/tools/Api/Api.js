import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.env.apiEndpoint,
  responseType: "json",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

/*
// Uncomment if authenticated requests needed
instance.interceptors.request.use(
  (config) => {
    const token = storeAccessToken.get();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  }
);
 */

export default instance;
