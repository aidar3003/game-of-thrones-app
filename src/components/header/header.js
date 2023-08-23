import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    const charactersPage = '/characters'
    const booksPage = '/books'
    const housesPage = '/houses'
    return(
            <Navbar data-bs-theme="dark">
                <Navbar.Brand href="#home">Game Of Thrones DB</Navbar.Brand>
                <Nav className="d-flex justify-content-between">
                    <Nav.Link href={charactersPage}>Characters</Nav.Link>
                    <Nav.Link href={housesPage}>Houses</Nav.Link>
                    <Nav.Link href={booksPage}>Books</Nav.Link>
                </Nav>
            </Navbar>
    )
}

export default Header;