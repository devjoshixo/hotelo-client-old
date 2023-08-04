import React, { useState } from 'react';
import classes from './MobileGallery.module.css';
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from 'react-icons/bs/index';

const MobileGallery = (props) => {
  const hotel = props.hotel;
  const [ImageSelected, setImageSelected] = useState(0);
  return (
    <div className={classes.gallery}>
      <img src={hotel.images[ImageSelected].image.url} />
      <BsArrowLeftCircleFill
        className={`${classes.arrow} ${classes['arrow-left']}`}
        onClick={() => {
          setImageSelected((prev) => {
            if (prev == 0) {
              return 3;
            } else {
              return prev - 1;
            }
          });
        }}
      />
      <BsArrowRightCircleFill
        className={`${classes.arrow} ${classes['arrow-right']}`}
        onClick={() => {
          setImageSelected((prev) => {
            if (prev == 3) {
              return 0;
            } else {
              return prev + 1;
            }
          });
        }}
      />
    </div>
  );
};

export default MobileGallery;
