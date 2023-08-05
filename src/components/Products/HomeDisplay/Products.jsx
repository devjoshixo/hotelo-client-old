import React, { useEffect, useState } from 'react';
// import hotelPhoto from '../assets/marten-bjork-n_IKQDCyrG0-unsplash.jpg';
import hotelPhoto from '../../../assets/display.jpg';
import classes from './Products.module.css';
import data from '../../../api/data';
import ProductList from './ProductList';
import getHotels from '../../../api/getHotels';
import hoteldata from '../../../api/hoteldata';
import Loader from '../../UI/Loader';

const Products = () => {
  const [hotels, setHotels] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getHomepageHotels = async () => {
      // const result = await data.properties;
      const result = await getHotels();
      const converted = result.map((item) => {
        return hoteldata(item);
      });
      setHotels(converted);
    };
    getHomepageHotels();
  }, []);

  return (
    <>
      <div className={`${classes.displayImage}`}>
        <img src={hotelPhoto} />
        <h2 className={classes.offer}>Grab Upto 50% off on selected Hotels</h2>
        <button className={classes.action}>Book Now</button>
      </div>
      {!hotels && <Loader />}
      {hotels && <ProductList hotelList={hotels} />}
    </>
  );
};

export default Products;
