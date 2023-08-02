import React from 'react';
import ProductTile from './ProductTile';
import classes from './ProductList.module.css';

const ProductList = (props) => {
  // const hotel = props.hotelList[0];
  return (
    <>
      <h1 className={classes.header}>Hotels for you!</h1>
      <div className={classes.productlist}>
        {props.hotelList.map((hotel) => {
          return <ProductTile hotel={hotel} key={hotel.id} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
