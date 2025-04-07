import { City, OfferType } from '../types/offers';

function getOffersByCity(offers : OfferType[], city: City){
  return offers.filter((offer) => offer.city === city);
}

export {getOffersByCity};
