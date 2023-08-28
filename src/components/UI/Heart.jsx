import React, { useState } from 'react';
import classes from './Heart.module.css';

const Heart = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      className={classes.container}
      onClick={() => {
        setLiked((prev) => !prev);
      }}
    >
      {liked ? (
        <i className={`fa-solid fa-heart ${classes.icon}`}></i>
      ) : (
        <i className={`fa-regular fa-heart ${classes.icon}`}></i>
      )}
    </div>
  );
};

export default Heart;
