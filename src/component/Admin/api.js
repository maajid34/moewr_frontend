import axios from "axios";

const API =  "https://moewr-backend.onrender.com";

const api = axios.create({
  baseURL: API,
});

// read token from localStorage (or sessionStorage) and attach it
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // make sure you save this at login
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("sending token?", !!token, token?.slice(0,20)); // TEMP
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
