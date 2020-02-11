import { AuthActionTypes, AuthAction, AuthReducerState } from './types';

const AuthReducer = (state: AuthReducerState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.userLoaded:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.user
      };
    case AuthActionTypes.registerSuccess:
    case AuthActionTypes.loginSuccess:
      localStorage.setItem('token', action.auth.token);
      return {
        ...state,
        ...action.auth,
        isAuthenticated: true,
        loading: false
      };
    case AuthActionTypes.registerFail:
    case AuthActionTypes.authError:
    case AuthActionTypes.loginFail:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.error
      };
    case AuthActionTypes.logout:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null
      };
    case AuthActionTypes.clearErrors:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

export default AuthReducer;
