import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import { AuthContextProps } from '../../context/auth/types';
import ContactContext from '../../context/contact/contactContext';
import { ContactContextProps } from '../../context/contact/types';

interface Props {
  title?: string;
  icon?: string;
}

const Navbar: React.FC<Props> = ({
  title = 'Contact Keeper',
  icon = 'fas fa-id-card-alt'
}) => {
  const authContext = useContext<AuthContextProps>(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const { clearContacts } = useContext<ContactContextProps>(ContactContext);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to='/register'>Register</Link>
      </li>

      <li>
        <Link to='/login'>
          <i className='fas fa-sign-in-alt' /> Login
        </Link>
      </li>
    </>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
