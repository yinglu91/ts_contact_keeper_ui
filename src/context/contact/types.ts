/**
 * Action types -- 0, 1, 2 in order
 */
export enum ContactActionTypes {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
  contactError,
  clearContacts,

  setCurrent,
  clearCurrent,

  filterContacts,

  clearFilter
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

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  date?: Date;

  // _id, name, email, phone, type
}

export interface GetContactsAction {
  type: ContactActionTypes.getContacts;
  contacts: Contact[];
}

export interface AddContactAction {
  type: ContactActionTypes.addContact;
  contact: Contact;
}

export interface UpdateContactAction {
  type: ContactActionTypes.updateContact;
  contact: Contact;
}

export interface DeleteContactAction {
  type: ContactActionTypes.deleteContact;
  _id: string;
}

export interface ContactErrorAction {
  type: ContactActionTypes.contactError;
  error: string;
}

export interface ClearContactsAction {
  type: ContactActionTypes.clearContacts;
}

export interface SetCurrentAction {
  type: ContactActionTypes.setCurrent;
  current: Contact;
}

export interface ClearCurrentAction {
  type: ContactActionTypes.clearCurrent;
}

export interface FilterContactsAction {
  type: ContactActionTypes.filterContacts;
  text: string;
}

export interface ClearFilterAction {
  type: ContactActionTypes.clearFilter;
}

export type ContactAction =
  | GetContactsAction
  | AddContactAction
  | UpdateContactAction
  | DeleteContactAction
  | ContactErrorAction
  | ClearContactsAction
  | SetCurrentAction
  | ClearCurrentAction
  | FilterContactsAction
  | ClearFilterAction;

/**
 * State type
 */

export interface ContactReducerState {
  contacts: Contact[];
  current: Contact;
  filtered: Contact[];
  error: string;
  loading: boolean;
}

// Contact context (store) holds state & functions
export interface ContactContextProps {
  contacts: Contact[];
  current: Contact;
  filtered: Contact[];
  error: string;
  loading: boolean;

  getContacts: Function;
  addContact: Function;
  updateContact: Function;
  deleteContact: Function;
  clearContacts: Function;
  setCurrent: Function;
  clearCurrent: Function;
  filterContacts: Function;
  clearFilter: Function;
}
