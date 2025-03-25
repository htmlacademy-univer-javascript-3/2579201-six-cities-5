import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offers';
import { AppRoute } from '../../const';
import { CardRating } from '../CardRating/CardRating';

type OfferCardType ={
  offer: OfferType;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  pageBlock: 'favorites' | 'cities';
}

const OfferCard = ({offer, pageBlock, onMouseEnter, onMouseLeave,} : OfferCardType): JSX.Element => {
  const {isPremium, title, type, isFavorite, price, rating, previewImage} = offer;
  const imageSize = pageBlock === 'favorites' ? {width: 150, height: 110} : {width: 260, height: 200};
  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${pageBlock}__card place-card`}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`${pageBlock}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}${offer.id}`}>
          <img className="place-card__image" src={previewImage} {...imageSize} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <CardRating rating={rating} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export { OfferCard };
