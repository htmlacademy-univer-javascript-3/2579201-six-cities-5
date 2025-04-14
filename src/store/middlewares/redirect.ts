import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { reducer } from '../reducer';
import { browserHistory } from '../../utils/history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  ()=>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'redirect/redirectToNotFound'){
          browserHistory.push(action.payload);
        }

        return next(action);
      };
