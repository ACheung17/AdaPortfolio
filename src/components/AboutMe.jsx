import React from "react";

function AboutMe() {
    return (
        <section id="aboutme">
            <div className="container">
                <h2>About me</h2>
                <p>
                    Hi there and welcome to my website! I studied Computer Science at York
                    University and recently graduated. Currently, I'm focused on learning more
                    and improving my skills on <em>web development</em>.
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
        </section>
    );
}


export default AboutMe;