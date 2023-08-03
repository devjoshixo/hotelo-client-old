import React, { useEffect, useState } from 'react';
import hoteldata from '../../../api/hotel';
import classes from './ProductDisplay.module.css';
import hotelInfoData from '../../../api/hotelInfoData';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';

const ProductDisplay = () => {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    async function getHotelInfo() {
      const hotel = await hotelInfoData(hoteldata);
      setHotel(hotel);
    }
    getHotelInfo(hotel);
  }, []);

  return (
    <>
      {hotel && (
        <div className={classes.productcard}>
          <ProductGallery hotel={hotel} />
          <ProductInfo hotel={hotel} />
        </div>
      )}
    </>
  );
};

export default ProductDisplay;
