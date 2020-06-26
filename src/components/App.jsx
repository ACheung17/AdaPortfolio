import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import ProjectsPage from "./ProjectsPage";
import Newsletter from './Newsletter';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/projects" exact={true} component={ProjectsPage} />
        <Route path="/projects/newsletter" exact={true} component={Newsletter} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
