import React, { useState } from 'react';
import classes from './Navbar.module.css';
import { useHistory } from 'react-router-dom';
import HoverList from '../UI/HoverList';

const Navbar = () => {
  const [category, setCategory] = useState(true);

  const navigation = useHistory();

  const toggleDownButton = () => {
    setCategory((prevState) => {
      return !prevState;
    });
  };

  const redirectHome = () => {
    navigation.push('/');
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.heading} onClick={redirectHome}>
        <i className={`fa-solid fa-hotel ` + classes.icon}></i>
        <h1 className={classes.heading}>Hotelo</h1>
      </div>

      <div className={classes.options}>
        <div
          onMouseEnter={toggleDownButton}
          onMouseLeave={toggleDownButton}
          className={classes.category}
        >
          <p>Categories</p>
          {category ? (
            <>
              <i className={`fa-solid fa-caret-up ` + classes.caret}></i>
              <HoverList />
            </>
          ) : (
            <i className={`fa-solid fa-caret-down ` + classes.caret}></i>
          )}
        </div>

        <p>Deals</p>
        <p>What's New</p>
        <p>Booking</p>
      </div>
      <div className={classes.searchbar}>
        <input type='text' placeholder='Search for Hotels' />
        <i className='fa-solid fa-magnifying-glass'></i>
      </div>

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
    </div>
  );
};

export default Navbar;
