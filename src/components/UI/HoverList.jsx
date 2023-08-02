import React from 'react';
import classes from './HoverList.module.css';

const HoverList = () => {
  return (
    <div className={classes.hoverdiv}>
      <ul>
        <li>Dummy Category Item</li>
        <li>Dummy Category Item</li>
        <li>Dummy Category Item</li>
        <li>Dummy Category Item</li>
        <li>Dummy Category Item</li>
        <li>Dummy Category Item</li>
      </ul>
    </div>
  );
};

export default HoverList;
