import React from 'react';
import { Nav, Navbar, NavLink } from 'reactstrap';

function SubNav() {
    return (
        <div>
        <Navbar color="dark">
            <Nav className="mr-auto" navbar >
                <NavLink href="/"><img className="logo" src="/images/AC-dark.png" alt="logo" /></NavLink>
            </Nav>
        </Navbar>
        </div>
    );
}

export default SubNav;