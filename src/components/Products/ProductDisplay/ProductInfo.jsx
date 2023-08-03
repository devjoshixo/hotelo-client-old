import React, { useEffect, useState } from 'react';
import classes from './ProductInfo.module.css';
import StarRating from '../../UI/StarRating';
import NativeDatePicker from 'native-datepicker/src/react';

const ProductInfo = (props) => {
  const hotel = props.hotel;
  const [person, setPerson] = useState(1);

  const handlePlusClick = () => {
    setPerson((prev) => {
      if (prev == 5) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const handleSubClick = () => {
    setPerson((prev) => {
      if (prev == 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div>
      <h1 className={classes.name}>{hotel.name}</h1>
      <p className={classes.tagline}>{hotel.tagline}</p>
      <StarRating rating={hotel.rating} />
      <h2 className={classes.price}>
        {hotel.price}
        {hotel.originalPrice && (
          <s className={classes.originalPrice}> {hotel.originalPrice}</s>
        )}{' '}
        per night
      </h2>

      <h3>Number of Adults</h3>
      <div className={classes.wrapperbooking}>
        <div className={classes.booking}>
          <p data-site='sub' onClick={handleSubClick}>
            -
          </p>
          <p>{person}</p>
          <p data-set='add' onClick={handlePlusClick}>
            +
          </p>
        </div>
        <button className={classes.booknow}>Book Now</button>
      </div>

      <div className={classes.facilities}>
        <h2>
          <li>Facilities</li>
        </h2>
        {hotel.Amenities.map((item) => {
          return <li>{item.text}</li>;
        })}
      </div>

      <div>
        <h2>Need to Know</h2>
        {hotel.needToKnow.map((item) => {
          return <p>{item}</p>;
        })}
      </div>

      <div className={classes.checkin}>
        <h2>Check in Instructions</h2>
        {hotel.checkinInstructions.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default ProductInfo;
