import React, { useState } from 'react';
// import hotelPhoto from '../assets/marten-bjork-n_IKQDCyrG0-unsplash.jpg';
import hotelPhoto from '../assets/display.jpg';
import classes from './Products.module.css';

const Products = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <div
        className={`${classes.displayImage} ${loaded ? '' : classes.notloaded}`}
      >
        <img
          src={hotelPhoto}
          onLoad={() => {
            setLoaded(true);
          }}
        />
        <h2 className={classes.offer}>Grab Upto 50% on selected Hotels</h2>
      </div>
    </>
  );
};

export default Products;
