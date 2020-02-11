// import { SET_ALERT, REMOVE_ALERT } from '../types';
import { AlertActionTypes, AlertAction, AlertReducerState } from './types';

export default (state: AlertReducerState, action: AlertAction) => {
  switch (action.type) {
    case AlertActionTypes.setAlert:
      return { ...state, alerts: [...state.alerts, , action.payload] };
    case AlertActionTypes.removeAlert:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload)
      };

    default:
      return state;
  }
};
