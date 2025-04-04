import { createReducer } from '@reduxjs/toolkit';
import { cityChange, fetchOffers } from './action';
import { OfferType } from '../types/offers';
import { cities } from '../const';

const initialState = {
  city: cities.Paris,
  offers: [] as OfferType[],
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(cityChange, (state, action)=>{
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(fetchOffers, (state, action)=>{
      const {offers} = action.payload;
      state.offers = offers;
    });
});

export {reducer};
