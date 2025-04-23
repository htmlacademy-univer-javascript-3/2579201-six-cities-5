import { createAsyncThunk } from '@reduxjs/toolkit';
import { addComment, redirectToNotFound, setAuthStatus, setComments, setError, setIsLoading, setOffers, setOffersNearby, setTargetedOffer, setUser } from './action';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Comment, FullOffer, newComment, OfferType } from '../types/offers';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { errorHandler } from '../utils/error';
import { store } from './store';
import { dropToken, saveToken } from '../api/token';
import { AuthData, UserData } from '../types/auth';

export const clearError = createAsyncThunk('error/clearError', () => {
  setTimeout(() => {
    store.dispatch(setError({ error: null }));
  }, 2000);
});

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: { api: AxiosInstance };
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: { api } }) => {
    dispatch(setIsLoading(true));
    try {
      const { data } = await api.get<OfferType[]>(APIRoute.Offers);
      dispatch(setOffers({ offers: data }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorHandler(error.message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  },
);

export const fetchOffer = createAsyncThunk<boolean, FullOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: { api: AxiosInstance };
}>(
  'data/fetchOffer',
  async (id, { dispatch, extra: { api } }) => {
    let isOfferLoaded = true;
    dispatch(setTargetedOffer(null));
    dispatch(setIsLoading(true));
    try {
      const { data } = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
      dispatch(setTargetedOffer(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorHandler(error.message);
        dispatch(redirectToNotFound(AppRoute.NotFound));
        isOfferLoaded = false;
      }
    } finally {
      dispatch(setIsLoading(false));
    }
    return isOfferLoaded;
  },
);

export const fetchOffersNearby = createAsyncThunk<void, FullOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: { api: AxiosInstance };
}>(
  'data/fetchOffersNearby',
  async (id, { dispatch, extra: { api } }) => {
    dispatch(setOffersNearby(null));
    dispatch(setIsLoading(true));
    try {
      const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);

      dispatch(setOffersNearby(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorHandler(error.message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  },
);

export const fetchComments = createAsyncThunk<void, FullOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: { api: AxiosInstance };
}>(
  'data/fetchComments',
  async (id, { dispatch, extra: { api } }) => {
    dispatch(setComments([]));
    dispatch(setIsLoading(true));
    try {
      const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
      dispatch(setComments(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorHandler(error.message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  },
);


export const postComment = createAsyncThunk<void, {offerId:FullOffer['id']; comment: newComment}, {
  dispatch: AppDispatch;
  state: State;
  extra: { api: AxiosInstance };
}>(
  'comments/postComment',
  async ({offerId, comment}, { dispatch, extra: { api } }) => {
    try {
      const {data} = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, comment);
      dispatch(addComment(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorHandler(error.message);
      }
    }
  },
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: { api: AxiosInstance };
}>(
  'user/checkAuth', async (_arg, { dispatch, extra: { api } }) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setUser(data));
    } catch(error) {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));

    }
  });

export const login = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: { api: AxiosInstance };
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: {api}}) => {
      try {
        const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
        saveToken(data.token);
        dispatch(setAuthStatus(AuthorizationStatus.Auth));
        dispatch(setUser(data));
      } catch(error){
        if (error instanceof Error){
          errorHandler(error.message);
        }
      }
    },
  );

export const logout = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: { api: AxiosInstance };
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: {api}}) => {
      try {
        await api.delete(APIRoute.Logout);
        dropToken();
        dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
        dispatch(setUser(null));
      } catch (error){
        if (error instanceof Error){
          errorHandler(error.message);
        }
      }
    },
  );
