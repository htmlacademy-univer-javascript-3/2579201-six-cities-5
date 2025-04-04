import { Favorites } from '../../pages/Favorites/Favorites';
import { Login } from '../../pages/Login/Login';
import { Main } from '../../pages/Main/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Offer } from '../../pages/Offer/Offer';
import { NotFound } from '../../pages/NotFound/NotFound';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { AppRoute } from '../../const';
import { OfferType } from '../../types/offers';
import { FavoritesByCity } from '../../types/favorites';
import { Review } from '../../types/review';
import { mockOffers } from '../../mocks/offers';
type AppProps = {
  reviews: Review[];
}

const App = ({ reviews } : AppProps) : JSX.Element => {
  function getFavoritesByCity(offersList: OfferType[]) {
    return offersList
      .filter((offer) => offer.isFavorite)
      .reduce((acc: FavoritesByCity, offer) => {
        const cityName = offer.city.name;
        if (!acc[cityName]) {
          acc[cityName] = [];
        }
        acc[cityName].push(offer);
        return acc;
      }, {});
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute isAuth>
              <Favorites offers={getFavoritesByCity(mockOffers)}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}:id`}
          element={<Offer reviews={reviews}/>}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>);

};

export { App };
