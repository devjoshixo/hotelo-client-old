import React, { lazy, useEffect, useState } from 'react';
import classes from './Login.module.css';
import Email from './Email';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Password from './Password';

const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: '',
    password: '',
  });
  const [emailPage, setEmailPage] = useState(true);
  const history = useHistory();

  const arrowClickHandler = () => {
    setFormDetails({ email: '', password: '' });
    if (emailPage) {
      history.goBack();
    } else {
      setEmailPage(true);
    }
  };

  const formDetailChangeHandler = (event) => {
    setFormDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <div className={classes.container}>
      <i
        className={`fa-solid fa-arrow-left ${classes.arrow}`}
        onClick={arrowClickHandler}
      />
      {emailPage ? (
        <Email
          onFormChange={formDetailChangeHandler}
          formDetails={formDetails}
          setEmailPage={setEmailPage}
        />
      ) : (
        <Password
          onFormChange={formDetailChangeHandler}
          formDetails={formDetails}
        />
      )}
    </div>
  );
};

export default Login;
