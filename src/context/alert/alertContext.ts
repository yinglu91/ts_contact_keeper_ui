import { createContext } from 'react';
import { AlertContextProps } from './types';

const initialState = {
  alerts: [],
  setAlert: () => null
};

const alertContext = createContext<AlertContextProps>(initialState);

export default alertContext;
