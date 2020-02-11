/**
 * Action types -- 0, 1, 2 in order
 */
export enum AuthActionTypes {
  registerSuccess,
  registerFail,
  userLoaded,
  authError,
  loginSuccess,
  loginFail,
  logout,
  clearErrors
}

/**
 * Data type
 */
export interface User {
  name: string;
  email: string;
  password?: string;
  date: Date;
}

export interface Auth {
  token: string;
}

export interface RegisterSuccessAction {
  type: AuthActionTypes.registerSuccess;
  auth: Auth;
}

export interface RegisterFailAction {
  type: AuthActionTypes.registerFail;
  error: string; // error message
}

export interface UserLoadedAction {
  type: AuthActionTypes.userLoaded;
  user: User;
}

export interface AuthErrorAction {
  type: AuthActionTypes.authError;
  error: string; // error message
}

export interface LoginSuccessAction {
  type: AuthActionTypes.loginSuccess;
  auth: Auth;
}
//
export interface LoginFailAction {
  type: AuthActionTypes.loginFail;
  error: string; // error message
}

export interface LogoutAction {
  type: AuthActionTypes.logout;
}

export interface ClearErrorsAction {
  type: AuthActionTypes.clearErrors;
}

export type AuthAction =
  | RegisterSuccessAction
  | RegisterFailAction
  | UserLoadedAction
  | AuthErrorAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | ClearErrorsAction;

/**
 * State type
 */

export interface AuthReducerState {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: User;
  error: string;
}

// Auth context (store) holds state & functions
export interface AuthContextProps {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: User;
  error: string;

  register: Function;
  loadUser: Function;
  login: Function;
  logout: Function;
  clearErrors: Function;
}
