import React from 'react';
import classes from './Hamburger.module.css';
import { useState } from 'react';
import Options from './Sections/Options';

const Hamburger = () => {
  const [onOpen, setOnOpen] = useState(false);

  const toggleOpen = () => {
    setOnOpen((prevState) => !prevState);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      toggleOpen();
    }
  };

  return (
    <div className={classes.rightsection}>
      <i className={`fa-solid fa-magnifying-glass fa-xl ${classes.search}`}></i>
      <div
        className={`${classes.hamburgermenu} ${onOpen ? classes.open : ''}`}
        onClick={toggleOpen}
      >
        <div className={classes.icon3}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {onOpen ? (
        <>
          <div className={classes.outer} onClick={handleClick}>
            <div className={classes.slidecard}>
              <Options />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Hamburger;
