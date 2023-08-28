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
import hotelInfo from '../../../api/seedHotelData';

const ProductDisplay = () => {
  const [hotel, setHotel] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: '786px' });

  const location = useLocation();
  const search = new URLSearchParams(location.search);

  useEffect(() => {
    async function getHotelInfo() {
      //Local Seeded hotel data
      const hotels = await hotelInfo;
      //Hotels.com Api to fetch hotel details
      // const hotels = await getHotelDetails(search.get('id'));

      const hotelData = await JSON.parse(localStorage.getItem('hotelData'));
      const hotel = await hotelInfoData(hotels, {
        price: hotelData.price,
        originalPrice: hotelData.originalPrice,
      });
      setHotel(hotel);
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
