import React from 'reactn';
import {Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {HashLink} from 'react-router-hash-link';
import './NavBar.css';
import Dropdown from "react-bootstrap/Dropdown";
import logo from "./logo.png";
// import user3 from "../Home/images/face3.jpg";
// import Carousel from "../Home/Home";

class NavBar extends React.Component {

    render() {
        return (
            <Navbar variant='dark' expand="md" sticky="top" className="text-center NavBarRoot"
                    style={{'backgroundColor':this.global.titleBg}} >
                <Navbar.Brand className=""><Link to={'/'}>    <img className='ml-3 img-fluid logo-img '  src={logo} alt="logo" /></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <HashLink to={'/#titleLink'} className="nav-link">Home</HashLink>
                        {
                            this.global.user.type!=='retail' &&
                            <HashLink to={'/#pricingLink'} className="nav-link">Pricing</HashLink>
                        }
                        {!this.global.signedIn ?
                            <>
                                <Link to={'/signin'} className="nav-link ">Sign In</Link>
                                <Link to={'/register'} className="nav-link">Register</Link>
                            </>
                            :
                            <>
                                <Link to={'/dashboard'} className="nav-link">Bookings</Link>
                                <span className="nav-link signout" onClick={() => {this.props.signOut()}} >
                                Sign Out
                                </span>
                                <Dropdown className='nav-link'>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    <span>
                                        {this.global.user.name}
                                    </span>

                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Link to={'/dashboard'} className="text-dark btn">Bookings</Link>
                                    <div className="text-dark btn " onClick={() => {this.props.signOut()}} >Sign Out</div>

                                </Dropdown.Menu>
                                </Dropdown>
                            </>
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