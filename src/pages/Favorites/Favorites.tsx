import { FavoritesList } from '../../components/FavoritesList/FavoritesList';
import { Header } from '../../components/Header/Header';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getFavoritesByCity } from '../../utils/offers';

const Favorites = () => {
  const offers = useAppSelector((state)=> state.offers);
  const favoritesOffers = getFavoritesByCity(offers);
  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={favoritesOffers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

export { Favorites };
