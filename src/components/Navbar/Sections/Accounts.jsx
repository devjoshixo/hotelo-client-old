import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from './Accounts.module.css';
import AuthContext from '../../../context/AuthContext';
import UseLogout from '../../../hooks/UseLogout';

const Accounts = () => {
  const [modal, setModal] = useState(true);
  const navigation = useHistory();
  const ctx = useContext(AuthContext);
  const { logout } = UseLogout();
  const logOutHandler = (event) => {
    event.preventDefault();
    window.location.reload();
    logout();
  };

  return (
    <div className={classes.actionable}>
      <div
        className={`${classes.sidecontent} ${classes.account}`}
        onMouseLeave={() => {
          setModal(true);
        }}
        onMouseEnter={() => {
          setModal(true);
        }}
      >
        <i className='fa-regular fa-user fa-lg'></i>
        <p>Account</p>

        {ctx.login.loggedIn ? (
          <div className={`${classes.loggedin} ${modal ? '' : classes.hidden}`}>
            Hi,
            <button className={classes.logout} onClick={logOutHandler}>
              Logout
            </button>
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
              <button className={classes.signInAction} href={'/account/signin'}>
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
