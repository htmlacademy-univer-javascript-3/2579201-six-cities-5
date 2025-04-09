import { CityList } from '../../components/CityList/CityList';
import { Map } from '../../components/Map/Map';
import { OffersList } from '../../components/OffersList/OffersList';
import { usePoints } from '../../hooks/usePoints';
import { useEffect } from 'react';
import { fetchOffers } from '../../store/action';
import { getOffersByCity } from '../../utils/offers';
import { cities } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { SortBar } from '../../components/SortBar/SortBar';
import { sort } from '../../utils/sort';
import { Header } from '../../components/Header/Header';
import { Spinner } from '../../components/Spinner/Spinner';

const Main = () : JSX.Element => {

  const city = useAppSelector((state)=> state.city);
  const offers = useAppSelector((state)=> state.offers);
  const activeSort = useAppSelector((state)=> state.activeSort);
  const isLoading = useAppSelector((state)=> state.isLoading);

  const dispatch = useAppDispatch();

  const activeOffers = getOffersByCity(offers, city);

  const points = usePoints(activeOffers);

  useEffect(()=>{

    dispatch(fetchOffers());
  }, []);

  return(
    <div className="page page--gray page--main">
      <Header />
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
                {isLoading ? <Spinner /> : <OffersList offers={sort[activeSort](activeOffers)} pageBlock='cities'/>}
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
