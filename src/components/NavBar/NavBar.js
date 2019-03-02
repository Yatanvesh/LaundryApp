import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
// import Button from "react-bootstrap/Button";
import {HashLink} from 'react-router-hash-link';
import './NavBar.css';

class NavBar extends React.Component {
    render(){
        return (

                <Navbar  variant='dark' expand="md" sticky="top" className="text-center navbar-root" style={{'backgroundColor': '#303841'}}>
                    <Navbar.Brand className="Laundry-Brand ml-3"><Link to={'/'}>Mr Laundry</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-5" >
                             <HashLink to={'/'} className="nav-link">Home</HashLink>
                            <HashLink to={'/#pricing'} className="nav-link">Pricing</HashLink>
                            {/*<HashLink to={'/#about'} className="nav-link">About</HashLink>*/}
                            <Link to={'/signin'} className="nav-link ">Sign In</Link>
                            <form className="form-inline  mx-auto">

                                <Link to={'/book'} className="nav-link btn btn-danger btn-sm text-light ml-2 px-3  "> <span className="btn-text"> Book</span></Link>
                            </form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>



        );
    }
}

export default NavBar;