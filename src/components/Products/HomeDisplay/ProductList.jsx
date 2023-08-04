import React, { useEffect, useState } from 'react';
import ProductTile from './ProductTile';
import classes from './ProductList.module.css';
import Sorter from '../../../helper/Sorter';

const ProductList = (props) => {
  const [sort, setSort] = useState({ byStar: 'htl' });
  const [hotels, setHotels] = useState(props.hotelList);

  useEffect(() => {
    const sorting = async () => {
      const result = await Sorter(hotels, sort);
      console.log(result);
      setHotels(result);
    };
    sorting();
  }, []);

  return (
    <>
      <div className={classes.productlist}>
        {hotels &&
          hotels.map((hotel) => {
            return <ProductTile hotel={hotel} key={hotel.id} />;
          })}
      </div>
    </>
  );
};

export default ProductList;
