import { OfferType } from './offers';

export type FavoritesByCity = Record<string, {
  offers: OfferType[];
}>;
