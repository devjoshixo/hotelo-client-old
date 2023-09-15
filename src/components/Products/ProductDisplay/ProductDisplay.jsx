import React, { useContext, useEffect, useState } from 'react';
import classes from './ProductDisplay.module.css';
import ProductGallery from './ProductGallery';
import hotelInfoData from '../../../helper/hotelInfoData';
import ProductInfo from './ProductInfo';
import getHotelDetails from '../../../api/getHotelDetails';
import { useMediaQuery } from 'react-responsive';
import MobileGallery from './MobileGallery';
import { useLocation } from 'react-router-dom';
import Loader from '../../UI/Loader';

const ProductDisplay = () => {
  const [hotel, setHotel] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: '786px' });

  const location = useLocation();
  const search = new URLSearchParams(location.search);

  useEffect(() => {
    async function getHotelInfo() {
      const hotels = await getHotelDetails();
      setHotel(hotels);
    }
    getHotelInfo();
  }, []);

  return (
    <>
      {!hotel && <Loader />}
      {hotel && (
        <div className={classes.productcard}>
          {isMobile ? (
            <MobileGallery hotel={hotel} />
          ) : (
            <ProductGallery hotel={hotel} />
          )}
          <ProductInfo hotel={hotel} />
        </div>
      )}
    </>
  );
};

export default ProductDisplay;
