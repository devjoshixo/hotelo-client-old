import React, { useEffect, useState } from 'react';
import ProductTile from './ProductTile';
import classes from './ProductList.module.css';
import Sorter from '../../../helper/Sorter';

const ProductList = (props) => {
  const [sort, setSort] = useState({
    byStar: 'default',
    byPrice: 'default',
  });
  const [hotels, setHotels] = useState(props.hotelList);

  const handleChange = (event) => {
    if (event.target.name == 'price') {
      setSort((prev) => {
        return { byStar: 'default', byPrice: event.target.value };
      });
    } else {
      setSort((prev) => {
        return { byPrice: 'default', byStar: event.target.value };
      });
    }
  };

  useEffect(() => {
    const result = Sorter(props.hotelList, sort);
    setHotels(result);
  }, [setHotels, sort]);

  // useEffect(() => {
  //   const sorting = () => {
  //     const result = Sorter(hotels, sort);
  //     console.log(result);
  //     setHotels(result);
  //   };
  //   sorting();
  // }, []);

  return (
    <>
      <div className={classes.selectors}>
        <select value={sort.byPrice} name='price' onChange={handleChange}>
          <option value='default' defaultValue>
            Price
          </option>
          <option value='htl'>High to Low Price</option>
          <option value='lth'>Low to High Price</option>
        </select>
        <select value={sort.byStar} name='star' onChange={handleChange}>
          <option value='default'>Hotel Star</option>
          <option value='htl'>High to Low Star</option>
          <option value='lth'>Low to High Star</option>
        </select>
      </div>
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
