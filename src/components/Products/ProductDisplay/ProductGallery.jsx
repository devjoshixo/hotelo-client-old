import React, { useState } from 'react';
import classes from './ProductGallery.module.css';
import uniqid from 'uniqid';

const ProductGallery = (props) => {
  const hotel = props.hotel;
  const [ImageSelected, setImageSelected] = useState(0);
  let counter = 0;

  // const imageModalOpener = () => {

  // }

  const handlePhotoChanger = (event) => {
    if (event.target.name == ImageSelected) {
      return;
    } else {
      setImageSelected(parseInt(event.target.name));
    }
  };
  return (
    <div className={classes.Gallery}>
      <div className={classes.images}>
        {hotel.images.map((item) => {
          return (
            <div className={classes.imagetile} key={uniqid()}>
              <img
                src={item.image.url}
                name={counter++}
                onClick={handlePhotoChanger}
                onMouseOver={handlePhotoChanger}
              />
            </div>
          );
        })}
      </div>
      <img
        src={hotel.images[ImageSelected].image.url}
        className={classes.mainImage}
        // onClick={imageModalOpener}
      />
    </div>
  );
};

export default ProductGallery;
