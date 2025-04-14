import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, changeActiveSort, setError, setHoveredOffer, setIsLoading, setOffers } from './action';
import { City, OfferType } from '../types/offers';
import { cities } from '../const';
import { SortOption } from '../types/sort';

const initialState:{
  city: City;
  offers: OfferType[];
  activeSort: SortOption;
  hoveredOffer: OfferType | null;
  isLoading: boolean;
  authorizationStatus: boolean;
  error: string | null;
} = {
  city: cities.Paris,
  offers: [] as OfferType[],
  activeSort: 'Popular',
  hoveredOffer: null,
  isLoading: true,
  authorizationStatus: false,
  error: null,
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
    });
});

export {reducer};
