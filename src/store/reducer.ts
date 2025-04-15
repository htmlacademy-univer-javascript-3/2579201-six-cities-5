import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, changeActiveSort, setAuthStatus, setError, setHoveredOffer, setIsLoading, setOffers, setUser } from './action';
import { City, OfferType } from '../types/offers';
import { AuthorizationStatus, cities } from '../const';
import { SortOption } from '../types/sort';
import { UserData } from '../types/auth';

const initialState:{
  city: City;
  offers: OfferType[];
  activeSort: SortOption;
  hoveredOffer: OfferType | null;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  user: null | UserData;
} = {
  city: cities.Paris,
  offers: [] as OfferType[],
  activeSort: 'Popular',
  hoveredOffer: null,
  isLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(changeActiveCity, (state, action)=>{
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(setOffers, (state, action)=>{
      const {offers} = action.payload;
      state.offers = offers;
    })
    .addCase(changeActiveSort, (state, action)=>{
      state.activeSort = action.payload.sort;
    })
    .addCase(setHoveredOffer, (state, action)=>{
      state.hoveredOffer = action.payload.offer;
    })
    .addCase(setIsLoading, (state, action)=>{
      state.isLoading = action.payload;
    })
    .addCase(setError, (state, action)=>{
      state.error = action.payload.error;
    })
    .addCase(setAuthStatus, (state, action)=> {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action)=>{
      state.user = action.payload;
    });
});

export {reducer};
