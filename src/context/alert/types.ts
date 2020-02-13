/**
 * Action types -- 0, 1, 2 in order
 */
export enum AlertActionTypes {
  setAlert,
  removeAlert
}

/**
 * Data type
 */
export interface Alert {
  id: string;
  msg: string;
  type: string;
}

export interface SetAlertAction {
  type: AlertActionTypes.setAlert;
  alert: Alert;
}

export interface RemoveAlertAction {
  type: AlertActionTypes.removeAlert;
  alertId: string;
}

export type AlertAction = SetAlertAction | RemoveAlertAction;

/**
 * State type
 */

export interface AlertReducerState {
  alerts: Alert[];
}

// Alert context (store) holds state & functions
export interface AlertContextProps {
  alerts: Alert[];
  setAlert: Function;
}

// setAlert: (id: string, msg: string, type: string) => void;
