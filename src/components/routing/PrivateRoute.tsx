import React, { useContext } from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { AuthContextProps } from '../../context/auth/types';

export interface ProtectedRouteProps extends RouteProps {
  // isAuthenticated: boolean;
  // authenticationPath: string;
  // redirectPathOnAuthentication: string;
  // setRedirectPathOnAuthentication: (path: string) => void;
}

// very common for create a private component
const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const authContext = useContext<AuthContextProps>(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
