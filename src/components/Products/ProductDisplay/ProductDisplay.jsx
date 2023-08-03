import React, { useEffect, useState } from 'react';
import hoteldata from '../../../api/hotel';
import classes from './ProductDisplay.module.css';
import hotelInfoData from '../../../api/hotelInfoData';

const ProductDisplay = () => {
  const [hotel, setHotel] = useState(null);
  const [ImageSelected, setImageSelected] = useState(0);
  let counter = 0;

  const handlePhotoChanger = (event) => {
    if (event.target.name == ImageSelected) {
      return;
    } else {
      setImageSelected(parseInt(event.target.name));
    }
  };

  //   console.log(ImageSelected);

  useEffect(() => {
    async function getHotelInfo() {
      const hotel = await hotelInfoData(hoteldata);
      setHotel(hotel);
    }
    getHotelInfo(hotel);
  }, []);

  return (
    <div className={classes.productcard}>
      {hotel && (
        <div className={classes.Gallery}>
          <div className={classes.images}>
            {hotel.images.map((item) => {
              return (
                <div className={classes.imagetile}>
                  <img
                    src={item.image.url}
                    name={counter++}
                    onClick={handlePhotoChanger}
                  />
                </div>
              );
            })}
          </div>
          <img
            src={hotel.images[ImageSelected].image.url}
            className={classes.mainImage}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
