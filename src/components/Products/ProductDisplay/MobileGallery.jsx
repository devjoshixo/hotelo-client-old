import React, { useState } from 'react';
import classes from './MobileGallery.module.css';

const MobileGallery = (props) => {
  const hotel = props.hotel;
  const [ImageSelected, setImageSelected] = useState(3);
  return (
    <div className={classes.gallery}>
      <img src={hotel.images[ImageSelected].image.url} />
    </div>
  );
};

export default MobileGallery;
