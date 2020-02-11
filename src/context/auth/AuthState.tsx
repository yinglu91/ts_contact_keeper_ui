import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

import { AuthActionTypes, AuthReducerState } from './types';

interface Props {
  children: React.ReactNode;
}

const AuthState: React.ComponentType<Props> = props => {
  const initialState: AuthReducerState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // all the actions

  // Load User
  const loadUser = async () => {
    // @todo - load token into global headers
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: AuthActionTypes.userLoaded, //USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AuthActionTypes.authError,
        error: 'failed to load user'
      });
    }
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: AuthActionTypes.registerSuccess,
        auth: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: AuthActionTypes.registerFail,
        error: err.response.data.msg
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: AuthActionTypes.loginSuccess,
        auth: res.data // {"token" : "345345"}
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: AuthActionTypes.loginFail,
        error: err.response.data.msg
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: AuthActionTypes.logout });

  // Clear Errors
  const clearErrors = () => dispatch({ type: AuthActionTypes.clearErrors });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
