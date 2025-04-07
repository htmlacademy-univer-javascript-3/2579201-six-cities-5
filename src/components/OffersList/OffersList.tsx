import { useState } from 'react';
import { OfferType } from '../../types/offers';
import { OfferCard } from '../OfferCard/OfferCard';

type OffersListProps = {
  offers: OfferType[];
  pageBlock: 'favorites' | 'cities' | 'near-places';
}

const OffersList = ({offers, pageBlock}: OffersListProps) =>{
  const [, setActiveOffer] = useState<OfferType | null>(null);

  return(
    <>
      {offers.map((offer)=> (
        <OfferCard
          offer={offer} key={offer.id} pageBlock={pageBlock}
          onMouseEnter={() => setActiveOffer(offer)}
          onMouseLeave={() => setActiveOffer(null)}
        />)) }
    </>);
};

export {OffersList};
