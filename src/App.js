import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { ScrollToTop } from './components/ScrollToTop';
import { MAGNITY_APP } from './utilities/projects';

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route path="/magnity">
            <ScrollToTop />
            <Project { ...MAGNITY_APP }/>
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
