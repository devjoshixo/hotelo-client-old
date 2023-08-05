import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import ProductPage from './Pages/ProductPage';
import Footer from './components/UI/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/hotel/details'>
          <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
