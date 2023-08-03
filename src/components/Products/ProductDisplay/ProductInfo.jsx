import React, { useContext, useEffect } from 'react';
import classes from './ProductInfo.module.css';
import StarRating from '../../UI/StarRating';
import HotelContext from '../../../context/HotelJsonContext';

const ProductInfo = (props) => {
  const hotel = props.hotel;
  const ctx = useContext(HotelContext);

  return (
    <div>
      <h1 className={classes.name}>{hotel.name}</h1>
      <p className={classes.tagline}>{hotel.tagline}</p>
      <StarRating rating={hotel.rating} />
      <h2 className={classes.price}>
        {ctx.hotelData.price}{' '}
        <s className={classes.originalPrice}>{ctx.hotelData.originalPrice}</s>{' '}
        per night
      </h2>
    </div>
  );
};

export default ProductInfo;
