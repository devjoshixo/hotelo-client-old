import React from 'react';
import classes from './StarRating.module.css';

const StarRating = (props) => {
  return (
    <div className={`${classes[`rating${props.rating}`]} ${classes.rating}`}>
      <div>
        <i className='fa-solid fa-star' />
        <i className='fa-solid fa-star' />
        <i className='fa-solid fa-star' />
        <i className='fa-solid fa-star' />
        <i className='fa-solid fa-star' />
      </div>
      <p>({props.rating})</p>
    </div>
  );
};

export default StarRating;
