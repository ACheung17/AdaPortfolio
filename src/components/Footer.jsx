import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return(
        <footer id="footer" class="colored-section">
        <div class="container centre-text">
            <h4>About this website</h4>
            <p>This website was created with ReactJS.</p>
            <p>© Copyright {year} Ada Cheung</p>
        </div>
    </footer>
    );
}

export default Footer;