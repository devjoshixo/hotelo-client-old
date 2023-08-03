import React, { useEffect } from 'react';
import classes from './ProductInfo.module.css';
import StarRating from '../../UI/StarRating';

const ProductInfo = (props) => {
  const hotel = props.hotel;

  return (
    <div>
      <h1 className={classes.name}>{hotel.name}</h1>
      <p className={classes.tagline}>{hotel.tagline}</p>
      <StarRating rating={hotel.rating} />
      <h2 className={classes.price}>
        {hotel.price}
        {hotel.originalPrice && (
          <s className={classes.originalPrice}>{hotel.originalPrice}</s>
        )}{' '}
        per night
      </h2>

      <div className={classes.facilities}>
        <h2>Facilities</h2>
        {hotel.Amenities.map((item) => {
          return <p>{item.text}</p>;
        })}
      </div>

      <div>
        <h2>Need to Know</h2>
        {hotel.needToKnow.map((item) => {
          return <p>{item}</p>;
        })}
      </div>

      <div>
        <h2>Check in Instructions</h2>
        {hotel.checkinInstructions.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default ProductInfo;
