import React from 'react';
import { Container, Button, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FaSeedling } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar className="header p-4" bg="light" variant="light" sticky='top' collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand className="nav-title" href="#home"><FaSeedling /> <span className="text-dark">AR</span> HealthCare Center</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/home#service">Service</Nav.Link>
            <Nav.Link href="#pricing">Pricin</Nav.Link>
            { user?.email ?
                <Button onClick={logOut}>LogOut</Button> :
                <Nav.Link href="/login">LogIn</Nav.Link>
            }
            <Navbar.Text>
                Signed in as: <a href="#login">{user.displayName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
};

export default Header;