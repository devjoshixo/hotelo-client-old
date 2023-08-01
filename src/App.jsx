import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Route, Switch } from 'react-router-dom';
import viteLogo from '/vite.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/done'>done</Route>
      </Switch>
    </>
  );
}

export default App;
