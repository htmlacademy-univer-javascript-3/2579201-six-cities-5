import { createReducer } from '@reduxjs/toolkit';
import { changeActiveCity, changeActiveSort, fetchOffers, setHoveredOffer } from './action';
import { City, OfferType } from '../types/offers';
import { cities } from '../const';
import { SortOption } from '../types/sort';

const initialState:{
  city: City;
  offers: OfferType[];
  activeSort: SortOption;
  hoveredOffer: OfferType | null;
} = {
  city: cities.Paris,
  offers: [] as OfferType[],
  activeSort: 'Popular',
  hoveredOffer: null,
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(changeActiveCity, (state, action)=>{
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(fetchOffers, (state, action)=>{
      const {offers} = action.payload;
      state.offers = offers;
    })
    .addCase(changeActiveSort, (state, action)=>{
      state.activeSort = action.payload.sort;
    })
    .addCase(setHoveredOffer, (state, action)=>{
      state.hoveredOffer = action.payload.offer;
    });
});

export {reducer};
