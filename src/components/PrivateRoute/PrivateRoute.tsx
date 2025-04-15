import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({ children}: PrivateRouteProps) => {
  const authorizationStatus = useAppSelector((state)=> state.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={'/login'} />
  );
};


export {PrivateRoute};
