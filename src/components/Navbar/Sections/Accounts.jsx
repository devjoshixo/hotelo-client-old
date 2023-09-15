import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from './Accounts.module.css';
import AuthContext from '../../../context/AuthContext';

const Accounts = () => {
  const [modal, setModal] = useState(false);
  const navigation = useHistory();
  const ctx = useContext(AuthContext);
  const handleAccount = () => {};
  return (
    <div className={classes.actionable}>
      <div
        className={`${classes.sidecontent} ${classes.account}`}
        onMouseLeave={() => {
          setModal(false);
        }}
        onMouseEnter={() => {
          setModal(true);
        }}
      >
        <i className='fa-regular fa-user fa-lg'></i>
        <p>Account</p>

        {ctx.login.loggedin ? (
          <div className={`${classes.loggedin} ${modal ? '' : classes.hidden}`}>
            You are logged in
          </div>
        ) : (
          <div
            className={`${classes.loggedout} ${modal ? '' : classes.hidden}`}
          >
            <h2 className={classes.offer}>
              Save an average of 15% on thousands of hotels when you're signed
              in
            </h2>
            <Link to='/account/login'>
              <button
                className={classes.signInAction}
                href={'/account/signin'}
                onClick={handleAccount}
              >
                Sign in
              </button>
            </Link>
            <Link to='/account/login' className={classes.link}>
              Sign up, it's free
            </Link>
          </div>
        )}
      </div>

      <div className={classes.sidecontent}>
        <i className='fa-solid fa-location-dot fa-lg'></i>
        <p>Attractions</p>
      </div>
    </div>
  );
};

export default Accounts;
