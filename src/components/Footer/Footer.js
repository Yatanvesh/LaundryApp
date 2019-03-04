import React from 'react';
import './Footer.css';
import {faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {HashLink} from 'react-router-hash-link';
const Footer = () =>  {
        return (
    <footer id="myFooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <h1 className="Laundry-Brand ml-3 mt-4"><HashLink to={'/#titleLink'} className='text-primary'>Mr Laundry</HashLink> </h1>
                </div>
                <div className="col-sm-2">
                    <h5>Get started</h5>
                    <ul>
                        <li><HashLink to={'/#titleLink'} >Home</HashLink></li>
                        <li><HashLink to={'/#pricingLink'} >Pricing</HashLink></li>
                        <li><HashLink to={'/signup'} >Sign Up</HashLink></li>
                        <li><HashLink to={'/book'} >Book</HashLink></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><HashLink to={'/#about'} >About</HashLink></li>
                        <li><HashLink to={'/#contact'} >Contact us</HashLink></li>
                        <li><HashLink to={'/#opinion'} >Reviews</HashLink></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Support</h5>
                    <ul>
                        <li>FAQ</li>
                        <li>Help desk</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook}/></a>
                    </div>
                    <button type="button" className="btn btn-default mb-3">Contact us</button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2019 Copyright All rights reserved </p>
        </div>
    </footer>

        );
};

export default Footer;

// {/*<footer className="bg-dark text-center " style={{'backgroundColor': '#303841'}} >*/}
// {/*<h4 className="text-light  text-center footer-text">Copyright All Rights Reserved</h4>*/}
// {/*</footer>*/}