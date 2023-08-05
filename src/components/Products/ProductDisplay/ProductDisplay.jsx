import React, { useContext, useEffect, useState } from 'react';
import hoteldata from '../../../api/hotel';
import classes from './ProductDisplay.module.css';
import hotelInfoData from '../../../api/hotelInfoData';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import getHotelDetails from '../../../api/getHotelDetails';
import { useMediaQuery } from 'react-responsive';
import MobileGallery from './MobileGallery';
import { useLocation } from 'react-router-dom';

const ProductDisplay = () => {
  const [hotel, setHotel] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: '786px' });

  const location = useLocation();
  const search = new URLSearchParams(location.search);

  // useEffect(() => {
  //   async function getHotelInfo() {
  //     const hotels = await getHotelDetails(search.get('id'));
  //     const hotelData = await JSON.parse(localStorage.getItem('hotelData'));
  //     const hotel = await hotelInfoData(hotels, {
  //       price: hotelData.price,
  //       originalPrice: hotelData.originalPrice,
  //     });
  //     setHotel(hotel);
  //   }
  //   getHotelInfo();
  // }, []);

  useEffect(() => {
    async function getHotelInfo() {
      const hotelData = await JSON.parse(localStorage.getItem('hotelData'));
      const hotel = await hotelInfoData(hoteldata, {
        price: hotelData.price,
        originalPrice: hotelData.originalPrice,
      });
      setHotel(hotel);
    }
    getHotelInfo(hotel);
  }, []);

  return (
    <>
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
