import { createReducer } from '@reduxjs/toolkit';
import { addComment, changeActiveCity, changeActiveSort, setAuthStatus, setComments, setError, setHoveredOffer, setIsLoading, setOffers, setOffersNearby, setTargetedOffer, setUser } from './action';
import { City, Comment, FullOffer, OfferType } from '../types/offers';
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
  targetedOffer: null | FullOffer;
  comments: Comment[] ;
  offersNearby: null | OfferType[];
} = {
  city: cities.Paris,
  offers: [],
  activeSort: 'Popular',
  hoveredOffer: null,
  isLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
  targetedOffer:null,
  comments: [],
  offersNearby: null,
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
    })
    .addCase(setTargetedOffer, (state, action)=>{
      state.targetedOffer = action.payload;
    })
    .addCase(setComments, (state, action)=> {
      state.comments = action.payload;
    })
    .addCase(setOffersNearby, (state, action)=>{
      state.offersNearby = action.payload;
    })
    .addCase(addComment, (state, acttion)=>{
      state.comments.push(acttion.payload);
    });

});

export {reducer};
