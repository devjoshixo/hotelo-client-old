import React from 'react';
import classes from './ProductTile.module.css';

const ProductTile = (props) => {
  const hotel = props.hotel;
  const name = hotel.name.split(' ');
  return (
    <div className={classes.productcard}>
      <div className={classes.imagecard}>
        <img src={hotel.propertyImage.image.url} />
      </div>
      <h3 className={classes.name}>{name[0] + ' ' + name[1]}</h3>
      <p className={classes.info}>
        {hotel.destinationInfo.distanceFromDestination.value +
          ' ' +
          hotel.destinationInfo.distanceFromDestination.unit}{' '}
        away
      </p>
    </div>
  );
};

export default ProductTile;
