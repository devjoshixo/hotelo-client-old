import React, { useEffect, useState } from 'react';
// import hotelPhoto from '../assets/marten-bjork-n_IKQDCyrG0-unsplash.jpg';
import hotelPhoto from '../../assets/display.jpg';
import classes from './Products.module.css';
import data from '../../api/data';
import ProductList from './ProductList';

const Products = () => {
  const [loaded, setLoaded] = useState(false);
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    const getHomepageHotels = async () => {
      const result = await data.properties;
      setHotels(result);
    };
    getHomepageHotels();
  }, []);

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
        <button className={classes.action}>Book Now</button>
      </div>
      {hotels && <ProductList hotelList={hotels} />}
    </>
  );
};

export default Products;
