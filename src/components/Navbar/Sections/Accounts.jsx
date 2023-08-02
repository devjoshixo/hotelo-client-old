import React from 'react';
import classes from './Accounts.module.css';

const Accounts = () => {
  return (
    <div className={classes.actionable}>
      <div className={classes.sidecontent}>
        <i className='fa-regular fa-user fa-lg'></i>
        <p>Account</p>
      </div>

      <div className={classes.sidecontent}>
        <i className='fa-solid fa-location-dot fa-lg'></i>
        <p>Attractions</p>
      </div>
    </div>
  );
};

export default Accounts;
