import React from 'react';
import RatingCalculator from '../../helper/RatingCalculator';

const StarRating = (props) => {
  const starfillers = () => {
    return RatingCalculator(props.rating);
  };
  return (
    <div>
      {starfillers()} ({props.rating})
    </div>
  );
};

export default StarRating;
