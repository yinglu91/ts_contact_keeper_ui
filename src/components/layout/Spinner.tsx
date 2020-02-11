import React from 'react';
import spinner from './spinner.gif';

const Spinner: React.FC = () => {
  return (
    <>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </>
  );
};

export default Spinner;
