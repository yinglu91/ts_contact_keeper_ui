import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { AuthContextProps } from '../../context/auth/types';

// very common for create a private component
const PrivateRoute: React.ComponentType<any> = ({
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
