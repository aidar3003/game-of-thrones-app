import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return(
            <Navbar data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Game Of Thrones DB</Navbar.Brand>
                <Nav className="d-flex justify-content-between">
                    <Nav.Link href="#home">Characters</Nav.Link>
                    <Nav.Link href="#features">Houses</Nav.Link>
                    <Nav.Link href="#pricing">Books</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
    )
}

export default Header;