import { configureStore} from '@reduxjs/toolkit';
import {reducer } from './reducer';
import { createApi, notFoundInterceptor } from '../api/api';

export const api = createApi();

notFoundInterceptor(api);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk:{
        extraArgument: {api},
      }
    })
});
