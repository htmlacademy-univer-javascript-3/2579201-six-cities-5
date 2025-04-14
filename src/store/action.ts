import { createAction } from '@reduxjs/toolkit';
import { City, OfferType } from '../types/offers';
import { SortOption } from '../types/sort';
import { AppRoute } from '../const';


export const changeActiveCity = createAction<{city: City}>('city/changeActiveCity');

export const setOffers = createAction<{offers: OfferType[]}>('offers/setOffers');

export const changeActiveSort = createAction<{sort: SortOption}>('sort/changeActiveSort');

export const setHoveredOffer = createAction<{offer: OfferType | null}>('offers/setHoveredOffer');

export const setIsLoading = createAction<boolean>('data/setIsLoading');

export const setError = createAction<{error: string | null}>('error/setError');

export const redirectToNotFound = createAction<AppRoute>('redirect/redirectToNotFound');
