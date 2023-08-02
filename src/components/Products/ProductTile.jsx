import React from 'react';
import classes from './ProductTile.module.css';

const ProductTile = (props) => {
  const hotel = props.hotel;
  console.log(hotel);
  return (
    <div className={classes.productcard}>
      <img src={hotel.propertyImage.image.url} />
    </div>
  );
};

export default ProductTile;
