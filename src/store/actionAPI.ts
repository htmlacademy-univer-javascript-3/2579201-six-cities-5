import { createAsyncThunk } from '@reduxjs/toolkit';
import { setError, setIsLoading, setOffers } from './action';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types/offers';
import { APIRoute } from '../const';
import { errorHandler } from '../utils/error';
import { store } from './store';

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
