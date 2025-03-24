import { FavoritesByCity } from '../../types/favorites';
import { OffersList } from '../OffersList/OffersList';

type Props = {
    offers: FavoritesByCity;
}

const FavoritesList = ({offers}: Props) =>
  (
    <ul className="favorites__list">
      {Object.entries(offers).map(([cityName, offersList])=>(
        <li key={`favorites__locations-items-${cityName}`} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <OffersList offers={offersList.offers} pageBlock="favorites"/>
          </div>
        </li>)
      )}
    </ul>);
export {FavoritesList};
