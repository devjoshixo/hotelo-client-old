import React, { useContext } from 'react';
import classes from './ProductTile.module.css';
import { useHistory } from 'react-router-dom';
import hoteldata from '../../../api/hoteldata';
import HotelContext from '../../../context/HotelJsonContext';

const ProductTile = (props) => {
  const hotel = props.hotel;
  const name = hotel.name.split(' ');
  const ctx = useContext(HotelContext);
  const navigation = useHistory();

  const clickHandler = (event) => {
    console.log(event.target.name);
    ctx.setHotelData(hotel);
    navigation.push('/hotel/details?id=' + hotel.id);
  };

  return (
    <>
      <div className={classes.productcard} onClick={clickHandler}>
        <div className={classes.imagecard}>
          <img src={hotel.url} />
        </div>
        <div className={classes.infocard}>
          <div>
            <h3 className={classes.name}>{name[0] + ' ' + name[1]}</h3>
            <p className={classes.info}>
              {hotel.distnationValue + ' ' + hotel.destinationUnit}
              away
            </p>
            <p className={classes.price}>
              {hotel.price}{' '}
              {hotel.originalPrice ? (
                <s className={classes.cutout}>
                  <i>{hotel.originalPrice}</i>
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
    </>
  );
};

export default ProductTile;
