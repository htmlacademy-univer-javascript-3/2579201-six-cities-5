import { FormEvent, useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Navigate } from 'react-router-dom';
import { login } from '../../store/actionAPI';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AppRoute, AuthorizationStatus } from '../../const';

const Login = () : JSX.Element =>{
  const authorizationStatus = useAppSelector((state)=> state.authorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const loginValue = loginRef.current !== null ? loginRef.current?.value.trim() : '';
    const passwordValue = passwordRef.current !== null ? passwordRef.current?.value.trim() : '';
    if (loginValue.length > 0 && passwordValue.length > 0) {
      dispatch(login({
        login: loginValue,
        password: passwordValue
      }));
    }
  };

  if (authorizationStatus === AuthorizationStatus.Auth){
    return <Navigate to={AppRoute.Root}/>;
  }
  return(
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export { Login };
