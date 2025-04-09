import { Favorites } from '../../pages/Favorites/Favorites';
import { Login } from '../../pages/Login/Login';
import { Main } from '../../pages/Main/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Offer } from '../../pages/Offer/Offer';
import { NotFound } from '../../pages/NotFound/NotFound';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { AppRoute } from '../../const';
import { Review } from '../../types/review';
type AppProps = {
  reviews: Review[];
}

const App = ({ reviews } : AppProps) : JSX.Element => (
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
            <Favorites/>
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

export { App };
