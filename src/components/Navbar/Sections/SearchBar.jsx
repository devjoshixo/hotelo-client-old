import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={classes.searchbar}>
      <input type='text' placeholder='Search for Hotels' />
      <i className='fa-solid fa-magnifying-glass'></i>
    </div>
  );
};

export default SearchBar;
