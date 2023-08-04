import React, { useEffect, useState } from 'react';
// import hotelPhoto from '../assets/marten-bjork-n_IKQDCyrG0-unsplash.jpg';
import hotelPhoto from '../../../assets/display.jpg';
import classes from './Products.module.css';
import data from '../../../api/data';
import ProductList from './ProductList';
import getHotels from '../../../api/getHotels';
import hoteldata from '../../../api/hoteldata';

const Products = () => {
  const [hotels, setHotels] = useState(null);

  // useEffect(() => {
  //   const getHomepageHotels = async () => {
  //     const result = await getHotels();
  //     setHotels(result);
  //   };
  //   getHomepageHotels();
  // }, []);

  useEffect(() => {
    const getHomepageHotels = async () => {
      const result = await data.properties;
      const converted = result.map((item) => {
        return hoteldata(item);
      });
      setHotels(converted);
      console.log('use');
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
      {hotels && <ProductList hotelList={hotels} />}
    </>
  );
};

export default Products;
