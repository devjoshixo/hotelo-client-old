import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.heading}>
        <i className={'fa-solid fa-cart-shopping ' + classes.icon}></i>
        <h1 className={classes.heading}>Shopcart</h1>
      </div>
      <p>Categories</p>
      <p>Categories</p>
      <p>Categories</p>
    </div>
  );
};

export default Navbar;
