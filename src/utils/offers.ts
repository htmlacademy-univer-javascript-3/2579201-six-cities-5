import { FavoritesByCity } from '../types/favorites';
import { City, OfferType } from '../types/offers';

function getOffersByCity(offers : OfferType[], city: City){
  return offers.filter((offer) => offer.city.name === city.name);
}

function getFavoritesByCity(offersList: OfferType[]) {
  return offersList
    .filter((offer) => offer.isFavorite)
    .reduce((acc: FavoritesByCity, offer) => {
      const cityName = offer.city.name;
      if (!acc[cityName]) {
        acc[cityName] = [];
      }
      acc[cityName].push(offer);
      return acc;
    }, {});
}

export {getOffersByCity, getFavoritesByCity};
