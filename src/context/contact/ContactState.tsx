import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
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
import { ContactActionTypes, ContactReducerState, Contact } from './types';

interface Props {
  children: React.ReactNode;
}

const ContactState: React.ComponentType<Props> = props => {
  const initialState: ContactReducerState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
    loading: false
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // all the actions

  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({
        type: ContactActionTypes.getContacts,
        contacts: res.data
      });
    } catch (err) {
      dispatch({
        type: ContactActionTypes.contactError,
        error: err.response.msg
      });
    }
  };

  // Add Contact
  const addContact = async (contact: Contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);

      dispatch({ type: ContactActionTypes.addContact, contact: res.data });
    } catch (err) {
      dispatch({
        type: ContactActionTypes.contactError,
        error: err.response.msg
      });
    }
  };

  // Update Contact
  const updateContact = async (contact: Contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );

      dispatch({ type: ContactActionTypes.updateContact, contact: res.data });
    } catch (err) {
      dispatch({
        type: ContactActionTypes.contactError,
        error: err.response.msg
      });
    }
  };

  // Delete Contact
  const deleteContact = async (contactId: string) => {
    try {
      axios.delete(`/api/contacts/${contactId}`);

      dispatch({ type: ContactActionTypes.deleteContact, contactId });
    } catch (err) {
      dispatch({
        type: ContactActionTypes.contactError,
        error: err.response.msg
      });
    }
  };

  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: ContactActionTypes.clearContacts });
  };

  // Set Current Contact
  const setCurrent = (contact: Contact) => {
    dispatch({ type: ContactActionTypes.setCurrent, current: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: ContactActionTypes.clearCurrent });
  };

  // Filter Contacts
  const filterContacts = (text: string) => {
    dispatch({ type: ContactActionTypes.filterContacts, text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: ContactActionTypes.clearFilter });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,

        getContacts,
        addContact,
        updateContact,
        deleteContact,
        clearContacts,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
