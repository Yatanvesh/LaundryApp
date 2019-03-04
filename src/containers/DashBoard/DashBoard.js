import React from 'reactn';
import './DashBoard.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Order from '../../components/Order/Order';
import UserDetails from "../../components/UserDetails/UserDetails";
import {Link} from "react-router-dom";

class DashBoard extends React.Component {
    constructor(props) {
        super(props);

        let orders=null;
        if(this.global.signedIn)
            orders = this.global.user.orders;
        else orders = this.global.guest.orders;

        this.state = {
            col: {
                xs: 12,
                sm: 10,
                md: 8
            },
            orders:orders,
        }
        // if(!this.global.user.name)
        //     this.props.history.push('/signin');



    }

    getGreeting = () => {
        let name = this.global.user.name || this.global.guest.name || 'Guest';
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                return <h1 className='greeting'>Welcome Back {name}!</h1>;
            case 1:
                return <h1 className='greeting'>Good to see you {name}!</h1>;
            case 2:
                return <h1 className='greeting'> How's it going {name}?</h1>;
            default:
                return <h1 className='greeting'>Hello {name}!</h1>;
        }
    };

    render() {
        let {xs, sm, md} = this.state.col;
        return (
            <section id='dashboard'>
                <Container className='mt-4 mb-5'>
                    {this.getGreeting()}
                    <Row className='mt-5 mx-2 mx-lg-0 '>
                        <Col lg='7'>
                            <Col md='12' className='orders-col py-3 '>
                                <h2 className='my-2 text-center dash-title-text'>Your Orders</h2>
                                <Row>
                                    {
                                        this.state.orders.map(
                                            (order) =>{
                                                return (
                                                    <Col xs='12' md='6' key={order.id}>
                                                        <Order order={order} />
                                                    </Col>
                                                )
                                            }
                                        )
                                    }
                                </Row>
                                <Row className='justify-content-center mt-3'>
                                    <Link to={'/book'} className="btn btn-danger btn-xl text-light px-3 "> <span
                                        className="btn-text">Book Now</span></Link>
                                </Row>
                            </Col>
                        </Col>
                        {
                            (this.global.user.name || this.global.guest.name ) &&
                            <Col lg='5' className='py-3 '>
                            <Col md='12' className='orders-col'>
                            <h2 className='my-2 text-center dash-title-text'>Your Details</h2>
                            <UserDetails/>
                            </Col>
                            </Col>
                        }

                    </Row>

                </Container>
            </section>
        );
    }
}

export default DashBoard;