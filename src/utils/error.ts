import { store } from '../store/store';
import { setError } from '../store/action';
import { clearError } from '../store/actionAPI';

export const errorHandler = (message: string): void => {
  store.dispatch(setError({error: message}));
  store.dispatch(clearError());
};
