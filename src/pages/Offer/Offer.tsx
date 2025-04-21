import { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Map } from '../../components/Map/Map';
import { OffersList } from '../../components/OffersList/OffersList';
import { Rating } from '../../components/Rating/Rating';
import { ReviewList } from '../../components/ReviewList/ReviewList';
import { ReviewsForm } from '../../components/ReviewsForm/ReviewsForm';
import { usePoints } from '../../hooks/usePoints';
import { fetchComments, fetchOffer, fetchOffersNearby } from '../../store/actionAPI';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { OfferType } from '../../types/offers';
import { OfferGallery } from '../../components/OfferGallery/OfferGallery';
import { Spinner } from '../../components/Spinner/Spinner';
import { OfferHost } from '../../components/OfferHost/OfferHost';


const Offer = () : JSX.Element => {

  const targetedOffer = useAppSelector((state)=> state.targetedOffer);
  const comments = useAppSelector((state)=> state.comments) || [];
  const offersNearby = useAppSelector((state)=> state.offersNearby) || [];
  const dispatch = useAppDispatch();
  const nearbiestPoints = usePoints(offersNearby);
  const {id} = useParams<{id: string}>();
  const offerId: OfferType['id'] = id ?? '';

  useEffect(()=>{
    dispatch(fetchOffer(offerId)).then((res)=>{
      if (res.payload) {
        dispatch(fetchOffersNearby(offerId));
        dispatch(fetchComments(offerId));
      }
    });
  }, [offerId]);

  if (targetedOffer === null){
    return <Spinner />;
  }
  return(
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={targetedOffer.images}/>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {targetedOffer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {targetedOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating rating={targetedOffer.rating} pageBlock='offer'/>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {targetedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {targetedOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {targetedOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{targetedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {targetedOffer.goods.map((good)=> (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferHost host={targetedOffer.host}/>
                <div className="offer__description">
                  <p className="offer__text">
                    {targetedOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewList reviewsList={comments}/>
                <ReviewsForm offerId={offerId}/>
              </section>
            </div>
          </div>
          <Map pageBlock='offer' city={targetedOffer.city} points={nearbiestPoints}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={offersNearby} pageBlock='near-places'/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export { Offer };
