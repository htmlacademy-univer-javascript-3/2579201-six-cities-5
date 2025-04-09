import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { City, OfferType } from '../types/offers';
import { SortOption } from '../types/sort';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

export const changeActiveCity = createAction<{city: City}>('city/changeActiveCity');

export const setOffers = createAction<{offers: OfferType[]}>('offers/setOffers');

export const changeActiveSort = createAction<{sort: SortOption}>('sort/changeActiveSort');

export const setHoveredOffer = createAction<{offer: OfferType | null}>('offers/setHoveredOffer');

export const setIsLoading = createAction<boolean>('data/setIsLoading');

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>
(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setIsLoading(true));
    try {
      const {data} = await api.get<OfferType[]>(APIRoute.Offers);
      dispatch(setOffers({offers: data}));

    } finally{
      dispatch(setIsLoading(false));
    }
  },
);
