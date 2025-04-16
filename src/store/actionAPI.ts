import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthStatus, setError, setIsLoading, setOffers, setUser } from './action';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types/offers';
import { APIRoute, AuthorizationStatus } from '../const';
import { errorHandler } from '../utils/error';
import { store } from './store';
import { dropToken, saveToken } from '../api/token';
import { AuthData, UserData } from '../types/auth';

export const clearError = createAsyncThunk('error/clearError', () => {
  setTimeout(() => {
    store.dispatch(setError({ error: null }));
  }, 2000);
});

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: { api: AxiosInstance };
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: { api } }) => {
    dispatch(setIsLoading(true));
    try {
      const { data } = await api.get<OfferType[]>(APIRoute.Offers);
      dispatch(setOffers({ offers: data }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorHandler(error.message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  },
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: { api: AxiosInstance };
}>(
  'user/checkAuth', async (_arg, { dispatch, extra: { api } }) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setUser(data));
    } catch(error) {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));

    }
  });

export const login = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: { api: AxiosInstance };
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: {api}}) => {
      try {
        const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
        saveToken(data.token);
        dispatch(setAuthStatus(AuthorizationStatus.Auth));
        dispatch(setUser(data));
      } catch(error){
        if (error instanceof Error){
          errorHandler(error.message);
        }
      }
    },
  );

export const logout = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: { api: AxiosInstance };
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: {api}}) => {
      try {
        await api.delete(APIRoute.Logout);
        dropToken();
        dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
        dispatch(setUser(null));
      } catch (error){
        if (error instanceof Error){
          errorHandler(error.message);
        }
      }
    },
  );
