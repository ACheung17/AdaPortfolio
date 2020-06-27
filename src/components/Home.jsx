import React from "react";
import Intro from "./HomePage/Intro";
import Projects from "./HomePage/Projects";
import Connect from "./HomePage/Connect";
import Footer from "./Footer";

function Home(){
    return (
        <div>
            <Intro />
            <Projects />
            <Connect />
            <Footer home={true} />    
        </div>
    );
}

export default Home;