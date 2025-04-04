import { OfferType, Point } from '../types/offers';

function usePoints(offersList:OfferType[]){
  const points = [] as Point[];
  offersList.map((offer)=>{
    points.push(offer.location);
  });
  return points;
}

export {usePoints};
