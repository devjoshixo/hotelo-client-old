import React, { useEffect, useState } from 'react';
import hotelPhoto from '../../../assets/display.jpg';
import hoteldata from '../../../helper/hoteldata';
import classes from './Products.module.css';
import ProductList from './ProductList';
import getHotels from '../../../api/getHotels';
import Loader from '../../UI/Loader';
import hotelData from '../../../api/seedHotels';

const Products = () => {
  const [hotels, setHotels] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getHomepageHotels = async () => {
      //Local Seeded Data Fetch
      const result = await hotelData;

      //Hotels.com API fetch
      // const result = await getHotels();
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
