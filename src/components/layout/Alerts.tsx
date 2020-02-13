import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { AlertContextProps, Alert } from '../../context/alert/types';

const Alerts: React.FC = () => {
  const { alerts } = useContext<AlertContextProps>(AlertContext);

  return (
    <>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert: Alert) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' /> {alert.msg}
          </div>
        ))}
    </>
  );
};

export default Alerts;
