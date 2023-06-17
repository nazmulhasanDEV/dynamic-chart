import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://bb212102-2fab-4fae-9227-3b2b24cf1275.mock.pstmn.io", // Replace with your API base URL
  headers: {
    "Content-type": "application/json",
    withCredentials: true,
  },
});

// Request interceptor
axiosConfig.interceptors.request.use(
  (config) => {
    // console.log(config);
    return config;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosConfig.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

export default axiosConfig;
