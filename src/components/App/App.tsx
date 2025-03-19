import { Favorites } from '../../pages/Favorites/Favorites';
import { Login } from '../../pages/Login/Login';
import { Main } from '../../pages/Main/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Offer } from '../../pages/Offer/Offer';
import { NotFound } from '../../pages/NotFound/NotFound';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
type AppProps = {
  placeCount: number;
}

const App = ({ placeCount } : AppProps) : JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={<Main placeCount={placeCount} />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/favorites'
        element={
          <PrivateRoute isAuth={false}>
            <Favorites/>
          </PrivateRoute>
        }
      />
      <Route
        path='/offer/:id'
        element={<Offer />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />

    </Routes>
  </BrowserRouter>

);

export { App };
