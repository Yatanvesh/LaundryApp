import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
// import Button from "react-bootstrap/Button";

class NavBar extends React.Component {
    render(){
        return (
            <section id="header">
                <Navbar bg="dark" variant='dark' expand="md" sticky="top">
                    <Navbar.Brand ><Link to={'/'}>Mr Laundry</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        );
    }
}

export default NavBar;