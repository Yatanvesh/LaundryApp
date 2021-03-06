import React from 'react';
import './OrderCard.css';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Status from './Status/Status';

const OrderCard = ({order, type}) => {
    return (
        <Card className='text-centered Order'>
            <Card.Body className='order-card text-centered'>
                <div className='id text-centered'>Order #{order.id}</div>
                <Container className='mt-3'>
                    <Row>
                        <Col className='w100'>
                            <div className='field-name'>Services:</div>
                        </Col>
                        <Col className='w100'>
                            {
                                order.services.map(
                                    (service) => (
                                        <div className='field-value' key={order.id}>{service.label}</div>
                                    )
                                )
                            }
                        </Col>
                    </Row>
                    <hr className='field-separator'/>
                    <Row>
                        <Col>
                            <div className='field-name'>Weight:</div>
                        </Col>
                        <Col>
                            <div className='field-value'>{order.weight.label}</div>
                        </Col>
                    </Row>
                    <hr className='field-separator'/>
                    <Row>
                        <Col>
                            <div className='field-name'>Timing:</div>
                        </Col>
                        <Col>
                            <div className='field-value'>{order.startTime} - {order.endTime}</div>
                        </Col>
                    </Row>
                    {
                        order.special ?
                            <span><hr className='field-separator'/>
                            <Row>

                                <Col>
                                    <div className='field-name'>Special Instructions:</div>
                                </Col>
                                <Col>
                                    <div className='field-value'>{order.special}</div>
                                </Col>

                            </Row> </span> :
                            null
                    }

                    <hr className='field-separator'/>
                    <Row>
                        <Col>
                            <div className='field-name'>Status:</div>
                        </Col>
                        <Col>
                            <div className='field-value'>{'Being Washed'}</div>
                        </Col>
                    </Row>
                    <Status/>

                    <Row className='justify-content-center my-2'>
                        <Col>
                            {
                                type === 'customer' &&
                                <button className="btn btn-primary mr-2">Modify</button>
                            }
                            <button className="btn btn-danger ml-2">Cancel</button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>

    );
};

export default OrderCard;
