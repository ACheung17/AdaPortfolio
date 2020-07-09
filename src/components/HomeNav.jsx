import React from 'react';
import { Nav, Navbar, NavLink } from 'reactstrap';

function HomeNav() {
    return (
        <div>
        <Navbar expand="md">
            <Nav className="mx-auto" navbar >
                <NavLink href="#/aboutme">AboutMe</NavLink>
                {/* <NavLink href="#/projects">Projects</NavLink> */}
                <NavLink href="#/projects">Projects</NavLink>
                <NavLink href="AdaCheungResume.pdf">Resume</NavLink>
                
            </Nav>
        </Navbar>
        </div>
    );
}

export default HomeNav;