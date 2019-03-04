import React from 'react';
import Row from "../Home";
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";


const DownloadButtons = () =>  {
    return (
        <Container>
            <Row>
                <Col className='text-center mt-4'>
                    <Link to={'/book'} className="btn btn-danger btn-xl text-light px-3 "> <span
                        className="btn-text">Book Now</span></Link>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <button className="btn btn-dark btn-lg app-download-button mx-2" type="button">
                        <FontAwesomeIcon icon={faApple}/>
                        <span className='pl-1'>Download</span>
                    </button>

                    <button className="btn btn-outline-light btn-lg app-download-button mx-2" type="button">
                        <FontAwesomeIcon icon={faGooglePlay}/>
                        <span className='pl-1'>Download</span>
                    </button>
                </Col>
            </Row>
        </Container>
    );
};

export default DownloadButtons;