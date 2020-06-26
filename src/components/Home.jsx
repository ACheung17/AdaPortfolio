import React from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Connect from "./Connect";
import Footer from "./Footer";

function Home(){
    return (
        <div>
            <Intro />
            <Projects />
            <Connect />
            <Footer />    
        </div>
    );
}

export default Home;