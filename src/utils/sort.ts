import { OfferType } from '../types/offers';
import { TSort } from '../types/sort';

function sortByRating (a:OfferType, b:OfferType) {
  return b.rating - a.rating;
}

function sortLowToHigh (a:OfferType, b:OfferType) {
  return a.price - b.price;
}

function sortHighToLow (a:OfferType, b:OfferType) {
  return b.price - a.price;
}

export const sort: Record<TSort,(offers: OfferType[]) => OfferType[]> = {
  Popular:(offers: OfferType[]) => offers,
  HighToLow:(offers: OfferType[]) => offers.sort(sortHighToLow),
  LowToHigh:(offers: OfferType[]) => offers.sort(sortLowToHigh),
  TopRated:(offers: OfferType[]) => offers.sort(sortByRating),
};
