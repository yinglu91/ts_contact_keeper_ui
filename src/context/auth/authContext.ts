import { createContext } from 'react';

import { AuthContextProps, User } from './types';

const initialState = {
  token: '',
  isAuthenticated: false,
  loading: false,
  user: null,
  error: '',

  register: () => null,
  loadUser: () => null,
  login: () => null,
  logout: () => null,
  clearErrors: () => null
};

const authContext = createContext<AuthContextProps>(initialState);

export default authContext;
