import { OfferType } from '../../types/offers';
import { OfferCard } from '../OfferCard/OfferCard';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setHoveredOffer } from '../../store/action';

type OffersListProps = {
  offers: OfferType[];
  pageBlock: 'favorites' | 'cities' | 'near-places';
}

const OffersList = ({offers, pageBlock}: OffersListProps) =>{
  const dispatch = useAppDispatch();
  return(
    <>
      {offers.map((offer)=> (
        <OfferCard
          offer={offer} key={offer.id} pageBlock={pageBlock}
          onMouseEnter={() => dispatch(setHoveredOffer({offer}))}
          onMouseLeave={() => dispatch(setHoveredOffer({offer: null}))}
        />)) }
    </>);
};

export {OffersList};
