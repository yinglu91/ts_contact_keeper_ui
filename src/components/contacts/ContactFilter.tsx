import React, { useContext, useRef, useEffect } from 'react';

import ContactContext from '../../context/contact/contactContext';
import { ContactContextProps } from '../../context/contact/types';

const ContactFilter: React.FC = () => {
  const contactContext = useContext<ContactContextProps>(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (filtered === null) {
      text.current!.value = '';
    }
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text.current!.value !== '') {
      // actual value of input not empty
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
