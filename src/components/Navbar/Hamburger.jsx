import React from 'react';
import classes from './Hamburger.module.css';
import { useState } from 'react';

const Hamburger = () => {
  const [onOpen, setOnOpen] = useState(false);
  return (
    <div
      className={`${classes.hamburgermenu} ${onOpen ? classes.open : ''}`}
      onClick={() => {
        setOnOpen((prevState) => {
          return !prevState;
        });
      }}
    >
      <div className={classes.icon3}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
