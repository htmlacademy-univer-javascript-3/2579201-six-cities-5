import { OfferType, Point } from '../types/offers';

function usePoints(offersList:OfferType[]){
  return offersList
    .reduce((acc: Record<string, Point[]>, offer) => {
      const cityName = offer.city.name;
      if (!acc[cityName]) {
        acc[cityName] = [];
      }
      acc[cityName].push(offer.location);
      return acc;
    }, {});
}

export {usePoints};
