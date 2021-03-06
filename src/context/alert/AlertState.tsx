import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { AlertActionTypes, AlertReducerState } from './types';

interface Props {
  children: React.ReactNode;
}

const AlertState: React.ComponentType<Props> = props => {
  const initialState: AlertReducerState = { alerts: [] };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // all the actions

  // Set Alert
  const setAlert = (msg: string, type: string, timeout = 5000) => {
    const id: string = uuid.v4();
    dispatch({
      type: AlertActionTypes.setAlert,
      alert: { msg, type, id }
    });

    setTimeout(
      () => dispatch({ type: AlertActionTypes.removeAlert, alertId: id }),
      timeout
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
