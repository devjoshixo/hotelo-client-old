import React from 'react';
import classes from './Hamburger.module.css';
import { useState } from 'react';
import SearchBar from './Sections/SearchBar';
import Options from './Sections/Options';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const Hamburger = () => {
  const [onOpen, setOnOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const toggleOpen = () => {
    setOnOpen((prevState) => !prevState);
  };

  const handleSearchBarOpen = () => {
    setOpenSearch((prev) => !prev);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      toggleOpen();
    }
  };

  return (
    <div className={classes.rightsection}>
      {openSearch && (
        <div className={classes.searchdiv}>
          <BsArrowLeftCircleFill
            className={classes.arrow}
            onClick={handleSearchBarOpen}
          />
          <div className={classes.searchbar}>
            <input type='text' placeholder='Search for Hotels' />
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
      )}
      {!openSearch && (
        <i
          className={`fa-solid fa-magnifying-glass fa-xl ${classes.search}`}
          onClick={handleSearchBarOpen}
        ></i>
      )}
      <div
        className={`${classes.hamburgermenu} ${onOpen ? classes.open : ''}`}
        onClick={toggleOpen}
      >
        <div className={classes.icon3}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {onOpen ? (
        <>
          <div className={classes.outer} onClick={handleClick}>
            <div className={classes.slidecard}>
              <Options />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Hamburger;
