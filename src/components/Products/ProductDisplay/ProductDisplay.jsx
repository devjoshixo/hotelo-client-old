import React, { useContext, useEffect, useState } from 'react';
import hoteldata from '../../../api/hotel';
import classes from './ProductDisplay.module.css';
import hotelInfoData from '../../../api/hotelInfoData';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import HotelContext from '../../../context/HotelJsonContext';
import { useLocation } from 'react-router-dom';
import getHotelDetails from '../../../api/getHotelDetails';
import { useMediaQuery } from 'react-responsive';
import MobileGallery from './MobileGallery';

const ProductDisplay = () => {
  const [hotel, setHotel] = useState(null);
  const ctx = useContext(HotelContext);
  const isMobile = useMediaQuery({ maxWidth: '500px' });

  const navigation = useLocation();
  console.log(navigation);

  // useEffect(() => {
  //   async function getHotelInfo() {
  //     const data = await getHotelDetails(ctx.hotelData.id);
  //     console.log(data);
  //     const hotel = await hotelInfoData(data, {
  //       price: ctx.hotelData.price,
  //       originalPrice: ctx.hotelData.originalPrice,
  //     });
  //     setHotel(hotel);
  //   }
  //   getHotelInfo(hotel);
  // }, []);
  useEffect(() => {
    async function getHotelInfo() {
      const hotel = await hotelInfoData(hoteldata, {
        price: ctx.hotelData.price,
        originalPrice: ctx.hotelData.originalPrice,
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
