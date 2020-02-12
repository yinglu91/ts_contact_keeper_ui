import { createContext } from 'react';
import { ContactContextProps } from './types';

const initialState = {
  contacts: [],
  current: null,
  filtered: [],
  error: '',
  loading: false,

  getContacts: () => null,
  addContact: () => null,
  updateContact: () => null,
  deleteContact: () => null,
  clearContacts: () => null,
  setCurrent: () => null,
  clearCurrent: () => null,
  filterContacts: () => null,
  clearFilter: () => null
};
const contactContext = createContext<Partial<ContactContextProps>>({}); //createContext<ContactContextProps>(initialState);

export default contactContext;
