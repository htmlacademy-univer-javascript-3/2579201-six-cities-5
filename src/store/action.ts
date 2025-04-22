import { createAction } from '@reduxjs/toolkit';
import { City, Comment, FullOffer, OfferType } from '../types/offers';
import { SortOption } from '../types/sort';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/auth';


export const changeActiveCity = createAction<{city: City}>('city/changeActiveCity');

export const setOffers = createAction<{offers: OfferType[]}>('offers/setOffers');

export const setTargetedOffer = createAction<FullOffer | null>('offers/setTargetedOffer');

export const setComments = createAction<Comment[]>('comments/setCommnets');

export const addComment = createAction<Comment>('comments/addComment');

export const setOffersNearby = createAction<OfferType[] | null>('offers/setOffersNearby');

export const changeActiveSort = createAction<{sort: SortOption}>('sort/changeActiveSort');

export const setHoveredOffer = createAction<{offer: OfferType | null}>('offers/setHoveredOffer');

export const setIsLoading = createAction<boolean>('data/setIsLoading');

export const setError = createAction<{error: string | null}>('error/setError');

export const redirectToNotFound = createAction<AppRoute>('redirect/redirectToNotFound');

export const setAuthStatus = createAction<AuthorizationStatus>('user/setAuthStatus');

export const setUser = createAction<UserData | null>('user/setUser');
