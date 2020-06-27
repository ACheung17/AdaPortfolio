import React from "react";
import SubNav from "../SubNav";

function AboutMe() {
    return (
        <div>
            <SubNav />
            <div id="aboutme" className="container">
                <h2>About me</h2>
                <p>
                    Hi there and welcome to my website! I studied Computer Science at York
                    University and recently graduated. Currently, I'm focused on learning more
                    and improving my <em>web development</em>skills.
                </p>
                <p>
                    I love learning a variety of things. Here's some of the topics I've been learning
                    about during quarantine,
                    <ul>
                        <li>Web Development</li>
                        <li>SQL & Databases</li>
                        <li>Digital Forensics</li>
                        <li>Computer Networking</li>
                    </ul>
                </p>
                <p>
                    Besides from staring at the screen, I also enjoy,
                    <ul>
                        <li>Cooking</li>
                        <li>Exercising </li>
                        <li>Painting </li>
                        <li>DIYs</li>
                    </ul>
                </p>
            </div>
        </div>

    );
}

export default AboutMe;