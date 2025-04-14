import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { errorHandler } from '../utils/error';
import { store } from '../store/store';
import { AppRoute } from '../const';
import { redirectToNotFound } from '../store/action';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;


const statusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

type MessageType = {
  type: string;
  message: string;
}

const shouldDisplayError = (response: AxiosResponse)=> !!statusCodeMapping [response.status];

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });


  api.interceptors.response.use(
    (response)=> response,
    (error: AxiosError<MessageType>)=>{
      if (error.response && shouldDisplayError(error.response)){
        errorHandler(error.response.data.message);
        if ((error.response.status as StatusCodes) === StatusCodes.NOT_FOUND){
          store.dispatch(redirectToNotFound(AppRoute.NotFound));
        }
      }
      throw error;
    }
  );
  return api;
};
