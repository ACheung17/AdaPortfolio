import React from 'react';
import { Nav, Navbar, NavLink } from 'reactstrap';

function SubNav(props) {
    return (
        <div>
        <Navbar className="sub-nav">
            <Nav className="mr-auto" navbar >
                <NavLink href="#/" className="logo-txt"><div className="logo-box">AC</div></NavLink>
                {/* <img className="logo" src="/images/AC-dark.png" alt="logo" /> */}
            </Nav>
            {props.moreLinks && <NavLink className="subnavlink" href="#/projects">More Projects</NavLink>}
        </Navbar>
        </div>
    );
}

export default SubNav;