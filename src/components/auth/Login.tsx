import React, { useState, useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import AlertContext from '../../context/alert/alertContext';
import { AlertContextProps } from '../../context/alert/types';

import AuthContext from '../../context/auth/authContext';
import { AuthContextProps } from '../../context/auth/types';

const initialUser = {
  email: '',
  password: ''
};

interface Props extends RouteComponentProps<any> {
  /* other props for the FC */
}

const Login: React.FC<Props> = props => {
  const { setAlert } = useContext<AlertContextProps>(AlertContext);

  const authContext = useContext<AuthContextProps>(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState(initialUser);

  const { email, password } = user;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      console.log('Login submit');
      login({
        email,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>

        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
