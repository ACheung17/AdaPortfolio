import React from "react";
import HomeNav from "./HomeNav";

function Intro() {
    return (
        <section id="intro">
            <HomeNav />
            <div class="intro-div container"> 
                <h1 style={{fontSize: "7.5rem"}}>I'm Ada</h1>
                <h2 class="intro-sub">... an aspiring web developer.</h2>
            </div>
        </section>
    );
}

export default Intro; 