import { Favorites } from '../../pages/Favorites/Favorites';
import { Login } from '../../pages/Login/Login';
import { Main } from '../../pages/Main/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Offer } from '../../pages/Offer/Offer';
import { NotFound } from '../../pages/NotFound/NotFound';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { AppRoute } from '../../const';
import { OfferType } from '../../types/offers';
type AppProps = {
  offers: OfferType[];
}

const App = ({ offers } : AppProps) : JSX.Element => {
  function getFavoritesByCity(offersList: OfferType[]) {
    return offersList
      .filter((offer) => offer.isFavorite)
      .reduce((acc: Record<string, { offers: OfferType[] }>, offer) => {
        const cityName = offer.city.name;
        if (!acc[cityName]) {
          acc[cityName] = { offers: [] };
        }
        acc[cityName].offers.push(offer);
        return acc;
      }, {});
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute isAuth>
              <Favorites offers={getFavoritesByCity(offers)}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}:id`}
          element={<Offer />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>);

};

export { App };
