import React from "react";

function Footer(props) {
    const year = new Date().getFullYear();
    const abt = <p>This website was created with ReactJS.</p>;
    return(
        <footer id="footer" className="colored-section">
        <div className="container centre-text">
            {props.home && abt}
            <p>© Copyright {year} Ada Cheung</p>
        </div>
    </footer>
    );
}

export default Footer;