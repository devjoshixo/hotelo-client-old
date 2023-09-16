import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/UI/Footer';
import Homepage from './Pages/Homepage';
import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/LoginPage';

function App() {
  const [navBar, setNavBar] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/account/login') {
      setNavBar(false);
    } else {
      setNavBar(true);
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {navBar && <Navbar />}
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/hotel/details'>
          <ProductPage />
        </Route>
        <Route path='/account/login'>
          <LoginPage />
        </Route>
      </Switch>
      {navBar && <Footer />}
    </>
  );
}

export default App;
