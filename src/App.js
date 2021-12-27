import react from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import MK from './pages/mk';
import WoA from './pages/woa';
import GFH from './pages/gfh';

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
