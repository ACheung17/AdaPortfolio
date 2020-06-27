import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Connect() {
    return (
        <section id="connect" class="white-section">
        <div class="container centre-text">
            <h2>Let's connect</h2>
            <p>I'm currently open to any opportunities, and would love to make meaningful contributions to your team and/or projects.</p>
            <p> Or even feedback on this website! Let me know what you liked or how I can improve it.</p>    
            <p>Send me a message on LinkedIn, or through email.</p>
            <div class="socials">
                <a href="https://www.linkedin.com/in/ada--cheung/" target="__blank" className="social"><LinkedInIcon /></a>
                <a href="https://github.com/ACheung17" target="__blank" className="social"><GitHubIcon /></a>
                <a href="mailto:ada.cheung96@gmail.com" target="__blank" className="social"><MailOutlineIcon /></a>
            </div>     
        </div>
    </section>
    );
}

export default Connect;