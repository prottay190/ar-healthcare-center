import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
        <Navbar className="header p-4" bg="light" variant="light" sticky='top' collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand className="nav-title" href="#home">HealthCare Center</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricin</Nav.Link>
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Ott</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
};

export default Header;