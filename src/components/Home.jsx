import React from "react";
//import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Connect from "./Connect";
import Footer from "./Footer";

function Home(){
    return (<div>
        <Intro />
        <AboutMe />
        <Projects />
        <Connect />
        <Footer />    
    </div>);
}

export default Home;