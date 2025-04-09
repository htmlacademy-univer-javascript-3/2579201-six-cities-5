import { createAction } from '@reduxjs/toolkit';
import { City, OfferType } from '../types/offers';
import { SortOption } from '../types/sort';

export const changeActiveCity = createAction<{city: City}>('city/changeActiveCity');

export const fetchOffers = createAction<{offers: OfferType[]}>('offers/fetchOffers');

export const changeActiveSort = createAction<{sort: SortOption}>('sort/changeActiveSort');

export const setHoveredOffer = createAction<{offer: OfferType | null}>('offers/setHoveredOffer');
