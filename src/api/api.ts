import axios, { AxiosError, AxiosInstance } from 'axios';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  return api;
};

export const notFoundInterceptor = (api: AxiosInstance) => {
  api.interceptors.response.use(
    (response) => response,
    (error : AxiosError) => {
      if (error.response && error.response.status === 404) {
        window.location.href = '/not-found';
      }
      return Promise.reject(error);
    }
  );
};
