import { createAction } from '@reduxjs/toolkit';
import { City, OfferType } from '../types/offers';

export const changeActiveCity = createAction<{city: City}>('city/changeActiveCity');
export const fetchOffers = createAction<{offers: OfferType[]}>('offers/fetchOffers');
