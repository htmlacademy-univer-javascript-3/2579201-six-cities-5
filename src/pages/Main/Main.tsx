import { CityList } from '../../components/CityList/CityList';
import { Map } from '../../components/Map/Map';
import { OffersList } from '../../components/OffersList/OffersList';
import { usePoints } from '../../hooks/usePoints';
import { useEffect } from 'react';
import { fetchOffers } from '../../store/action';
import { mockOffers } from '../../mocks/offers';
import { getOffersByCity } from '../../utils/offers';
import { cities } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { SortBar } from '../../components/SortBar/SortBar';
import { sort } from '../../utils/sort';

const Main = () : JSX.Element => {

  const city = useAppSelector((state)=> state.city);
  const offers = useAppSelector((state)=> state.offers);
  const activeSort = useAppSelector((state)=> state.activeSort);
  const dispatch = useAppDispatch();

  const activeOffers = getOffersByCity(offers, city);
  const points = usePoints(activeOffers);
  useEffect(()=>{
    dispatch(fetchOffers({offers: mockOffers}));
  }, []);

  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={cities} activeCity={city.name}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeOffers.length} places to stay in {city.name}</b>
              <SortBar />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sort[activeSort](activeOffers)} pageBlock='cities'/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map points={points} city={city} pageBlock='cities'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Main };
