import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Magnity } from './pages/Magnity';

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route path="/magnity">
            <Magnity />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
