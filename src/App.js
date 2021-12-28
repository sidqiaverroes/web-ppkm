import React, { useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages';
import MK from './Components/pages/mk';
import WoA from './Components/pages/woa';
import GFH from './Components/pages/gfh';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Minggu-Kreasi" component={MK}/>
          <Route path="/WoA" component={WoA}/>
          <Route path="/GFH" component={GFH} />
        </Switch>
      </Router>
  );
}

export default App;
