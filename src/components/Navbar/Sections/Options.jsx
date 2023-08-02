import React, { useState } from 'react';
import classes from './Options.module.css';
import HoverList from '../../UI/HoverList';

const Options = (props) => {
  const [category, setCategory] = useState(false);

  const toggleDownButton = () => {
    setCategory((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className={classes.options}>
      <div
        onMouseEnter={toggleDownButton}
        onMouseLeave={toggleDownButton}
        onClick={toggleDownButton}
        className={classes.category}
      >
        <p>Categories</p>
        {category ? (
          <>
            <i className={`fa-solid fa-caret-up fa-lg ` + classes.caret}></i>
            <HoverList />
          </>
        ) : (
          <i className={`fa-solid fa-caret-down fa-lg ` + classes.caret}></i>
        )}
      </div>
      <p>Deals</p>
      <p>What's New</p>
      <p>Booking</p>
    </div>
  );
};

export default Options;
