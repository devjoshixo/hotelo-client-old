import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
