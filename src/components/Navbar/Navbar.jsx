import React from 'react';
import classes from './Navbar.module.css';
import { useMediaQuery } from 'react-responsive';
import HoverList from '../UI/HoverList';
import LogoSection from './Sections/LogoSection';
import Options from './Sections/Options';
import SearchBar from './Sections/SearchBar';
import Accounts from './Sections/Accounts';
import Hamburger from './Hamburger';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: '500px' });
  return (
    <div className={classes.navbar}>
      <LogoSection />
      {isMobile ? (
        ''
      ) : (
        <>
          <Options />
          <SearchBar />
          <Accounts />
        </>
      )}
      {isMobile ? <Hamburger /> : ''}
    </div>
  );
};

export default Navbar;
