import React from 'reactn';
import {Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {HashLink} from 'react-router-hash-link';
import './NavBar.css';
import Dropdown from "react-bootstrap/Dropdown";

class NavBar extends React.Component {

    render() {
        return (

            <Navbar variant='dark' expand="md" sticky="top" className="text-center navbar-root"
                    style={{'backgroundColor':this.global.titleBg}} >
                <Navbar.Brand className="Laundry-Brand ml-3"><Link to={'/'}>Mr Laundry</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <HashLink to={'/#titleLink'} className="nav-link">Home</HashLink>
                        {
                            this.global.user.type!=='retail' &&
                            <HashLink to={'/#pricingLink'} className="nav-link">Pricing</HashLink>
                        }

                        {!this.global.signedIn &&
                        <Link to={'/signin'} className="nav-link ">Sign In</Link>
                        }
                        {
                            !this.global.signedIn &&
                            <Link to={'/register'} className="nav-link">Register</Link>
                        }
                        {
                            this.global.signedIn &&
                            <Link to={'/dashboard'} className="nav-link">Bookings</Link>
                        }
                        {
                            this.global.signedIn &&
                            <span className="nav-link signout" onClick={() => {this.props.signOut()}} >
                                Sign Out
                            </span>
                        }
                        { this.global.signedIn &&
                            <Dropdown className='nav-link'>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    <span>
                                        {this.global.user.name}
                                    </span>

                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Link to={'/dashboard'} className="text-dark btn">Bookings</Link>
                                    <div className="text-dark btn" onClick={() => {this.props.signOut()}} >Sign Out</div>

                                </Dropdown.Menu>
                            </Dropdown>
                        }

                        {
                            this.global.user.type!=='retail' &&
                            <form className="form-inline  mx-auto">
                                <Link to={'/book'} className="nav-link btn btn-danger btn-sm text-light ml-2 px-3  "> <span
                                    className="btn-text"> Book</span></Link>
                            </form>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default NavBar;