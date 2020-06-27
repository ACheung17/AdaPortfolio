import React from 'react';
import { Route, Router as BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./Pages/AboutMe";
import ProjectsPage from "./Pages/ProjectsPage";
import Newsletter from './Pages/Newsletter';

function App() {
  return (
    <div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/aboutme" exact={true} component={AboutMe} />
          <Route path="/projects" exact={true} component={ProjectsPage} />
          <Route path="/projects/newsletter" exact={true} component={Newsletter} />
    </div>
  );
}

export default App;
