// import {
//   GET_CONTACTS,
//   ADD_CONTACT,
//   UPDATE_CONTACT,
//   DELETE_CONTACT,
//   CONTACT_ERROR,
//   SET_CURRENT,
//   CLEAR_CURRENT,
//   FILTER_CONTACTS,
//   CLEAR_CONTACTS,
//   CLEAR_FILTER
// } from '../types';
import {
  ContactActionTypes,
  ContactAction,
  ContactReducerState
} from './types';

export default (state: ContactReducerState, action: ContactAction) => {
  switch (action.type) {
    case ContactActionTypes.getContacts: //GET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts, //payload,
        loading: false
      };
    case ContactActionTypes.addContact: //ADD_CONTACT:
      return {
        ...state,
        contacts: [action.contact, ...state.contacts],
        loading: false
      };
    case ContactActionTypes.updateContact:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.contact._id ? action.contact : contact
        ),
        loading: false
      };
    case ContactActionTypes.deleteContact:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== action._id),
        loading: false
      };
    case ContactActionTypes.clearContacts:
      return {
        ...state,
        contacts: null,
        current: null,
        filtered: null,
        error: null
      };
    case ContactActionTypes.contactError:
      return {
        ...state,
        error: action.error
      };
    case ContactActionTypes.setCurrent:
      return {
        ...state,
        current: action.current
      };
    case ContactActionTypes.clearCurrent:
      return {
        ...state,
        current: null
      };
    case ContactActionTypes.filterContacts:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.text}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    case ContactActionTypes.clearFilter:
      return {
        ...state,
        filtered: null
      };

    default:
      return state;
  }
};
