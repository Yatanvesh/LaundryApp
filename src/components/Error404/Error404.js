import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Error404.css';
import {HashLink} from 'react-router-hash-link';

const Error404 = () =>  {
    return (
        <Container className='error-container mx-auto mt-5'>
            <Row>
                <Col className='col-centered text-center'>
                    <FontAwesomeIcon className='error-icon' icon={faExclamationCircle}/>
                    <h1>Error 404</h1>
                    <h2>Sorry, your page was not found </h2>
                    <HashLink to={"/#titleLink"} className='btn btn-primary btn-lg' >Home</HashLink>
                </Col>
            </Row>
        </Container>
    );
};

export default Error404;