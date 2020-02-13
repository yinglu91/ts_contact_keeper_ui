import { createContext } from 'react';
import { ContactContextProps, Contact } from './types';

const initialState = {
  contacts: [],
  current: null,
  filtered: [],
  error: null,
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
const contactContext = createContext<ContactContextProps>(initialState); //createContext<Partial<ContactContextProps>>({});

export default contactContext;
