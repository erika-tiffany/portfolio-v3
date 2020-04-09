import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { ScrollToTop } from './components/ScrollToTop';
import { 
  HOME,
  MAGNITY_APP, 
  MAGNITY_WEB, 
  BOARDINGWARE, 
  FUSION, 
  LJHOOKER, 
  PASIFIKA_TV, 
  PORTFOLIO,
  ARCHITECTURAL_PORTFOLIO,
  IRONBANK 
} from './utilities/pages';

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route path="/projects/magnity">
            <ScrollToTop />
            <Project { ...MAGNITY_APP }/>
          </Route>
          <Route path="/projects/magnity-marketing">
            <ScrollToTop />
            <Project { ...MAGNITY_WEB }/>
          </Route>
          <Route path="/projects/boardingware">
            <ScrollToTop />
            <Project { ...BOARDINGWARE }/>
          </Route>
          <Route path="/projects/fusion">
            <ScrollToTop />
            <Project { ...FUSION }/>
          </Route>
          <Route path="/projects/ljhooker">
            <ScrollToTop />
            <Project { ...LJHOOKER }/>
          </Route>
          <Route path="/projects/pasifikatv">
            <ScrollToTop />
            <Project { ...PASIFIKA_TV }/>
          </Route>
          <Route path="/projects/portfolio">
            <ScrollToTop />
            <Project { ...PORTFOLIO }/>
          </Route>
          <Route path="/architecture/portfolio">
            <ScrollToTop />
            <Project { ...ARCHITECTURAL_PORTFOLIO }/>
          </Route>
          <Route path="/architecture/ironbank">
            <ScrollToTop />
            <Project { ...IRONBANK }/>
          </Route>
          <Route path="/">
            <ScrollToTop />
            <Home { ...HOME }/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
