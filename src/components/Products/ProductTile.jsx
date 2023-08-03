import React from 'react';
import classes from './ProductTile.module.css';

const ProductTile = (props) => {
  const hotel = props.hotel;
  const name = hotel.name.split(' ');
  console.log(hotel.star);
  return (
    <div className={classes.productcard}>
      <div className={classes.imagecard}>
        <img src={hotel.propertyImage.image.url} />
      </div>
      <div className={classes.infocard}>
        <div>
          <h3 className={classes.name}>{name[0] + ' ' + name[1]}</h3>
          <p className={classes.info}>
            {hotel.destinationInfo.distanceFromDestination.value +
              ' ' +
              hotel.destinationInfo.distanceFromDestination.unit}
            away
          </p>
          <p className={classes.price}>
            {hotel.price.lead.formatted}{' '}
            {hotel.price.strikeOut ? (
              <s className={classes.cutout}>
                <i>{hotel.price.strikeOut.formatted}</i>
              </s>
            ) : (
              ''
            )}
          </p>
        </div>
        <div className={classes.rating}>
          <i
            className='fa-solid fa-star'
            style={{ color: '#000000', margin: '1.2rem 0.3rem 0 0' }}
          />
          <p>{hotel.star}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
