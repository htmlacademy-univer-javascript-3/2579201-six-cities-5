import { createAction } from '@reduxjs/toolkit';
import { City, OfferType } from '../types/offers';

export const cityChange = createAction<{city: City}>('city/cityChange');
export const fetchOffers = createAction<{offers: OfferType[]}>('offers/fetchOffers');
