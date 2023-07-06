import axios from "axios";
import store from "../redux/store";
import appConfig from "./app.config";

const apiService = axios.create({
  baseURL: appConfig.baseUrl,
});

apiService.interceptors.request.use((config) => {
  const state = store?.getState();
  config.headers.Authorization = state?.authReducer?.data?.accessToken;
  return config;
});

export default apiService;
