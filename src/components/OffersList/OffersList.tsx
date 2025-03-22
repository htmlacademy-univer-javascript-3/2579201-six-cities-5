import { useState } from 'react';
import { OfferType } from '../../types/offers';
import { OfferCard } from '../OfferCard/OfferCard';

type OffersListProps = {
  offers: OfferType[];
  block: string;
}

const OffersList = ({offers, block}: OffersListProps) => {
  const [activeOffer, setActiveOffer] = useState<OfferType | null>(null);
  return (
    <>
      {offers.map((offer)=> (
        <OfferCard
          offer={offer} key={offer.id} block={block}
          onMouseEnter={() => setActiveOffer(offer)}
          onMouseLeave={() => setActiveOffer(null)}
        />))}
    </>);
};

export {OffersList};
