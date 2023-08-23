import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

import './header.css'

const Header = () => {

    return(
            <Navbar data-bs-theme="dark">
                <Navbar.Brand> 
                    <Link className="link" to='/'>
                    Game Of Thrones DB
                    </Link></Navbar.Brand>
                <Nav className="d-flex justify-content-between">
                    <Nav.Link>
                        <Link className="link" to='/characters'>Characters
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="link" to='/houses'>Houses
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="link" to='/books'>Books
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar>
    )
}

export default Header;