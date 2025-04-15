import { NavLink } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logout } from '../../store/actionAPI';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state)=> state.user);
  const authorizationStatus = useAppSelector((state)=> state.authorizationStatus);
  const signOutHandler = () =>{
    dispatch(logout());
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink to={AppRoute.Root} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </NavLink>
          </div>
          {authorizationStatus === AuthorizationStatus.Auth ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user?.email}</span>
                    <span className="header__favorite-count">3</span>
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span onClick={signOutHandler} className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav> :
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </NavLink>
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
};

export { Header };
