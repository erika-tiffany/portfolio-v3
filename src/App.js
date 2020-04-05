import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Magnity } from './pages/Magnity';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route path="/magnity">
            <ScrollToTop />
            <Magnity />
          </Route>
          <Route path="/">
            <ScrollToTop />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
