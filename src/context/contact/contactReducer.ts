import {
  ContactActionTypes,
  ContactAction,
  ContactReducerState,
  Contact
} from './types';

export default (state: ContactReducerState, action: ContactAction) => {
  switch (action.type) {
    case ContactActionTypes.getContacts:
      return {
        ...state,
        contacts: action.contacts,
        loading: false
      };
    case ContactActionTypes.addContact:
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
        contacts: state.contacts.filter(
          contact => contact._id !== action.contactId
        ),
        loading: false
      };
    case ContactActionTypes.clearContacts:
      return {
        ...state,
        contacts: [],
        current: null,
        filtered: [],
        error: null,
        loading: false
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
        filtered: []
      };

    default:
      return state;
  }
};
