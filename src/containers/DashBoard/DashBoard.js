import React from 'reactn';
import './DashBoard.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import OrderCard from '../../components/OrderCard/OrderCard';
import UserDetails from "../../components/UserDetails/UserDetails";
import {Link} from "react-router-dom";

class DashBoard extends React.Component {
    constructor(props) {
        super(props);

        let orders = null;
        if (this.global.signedIn)
            orders = this.global.user.orders;
        else orders = this.global.guest.orders;

        this.state = {
            orders: orders,
        }
        // if(!this.global.user.name)
        //     this.props.history.push('/signin');

    }

    componentWillMount() {
        if(this.global.signedIn){
            let OrdersFinal = [];

            fetch("http://localhost:3005/getOrders", {
                method:'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({email:this.global.user.email})
            })
                .then(response => response.json())
                .then( orders => {
                    orders.orders.map(order =>{
                        let finalOrder = JSON.parse(order.orderjson);
                        console.log(finalOrder);
                        OrdersFinal.push(finalOrder);
                    })
                    this.setGlobal(Object.assign(this.global.user, {orders:OrdersFinal}));
                    this.setState({
                        orders:OrdersFinal
                    })
                })
                .catch(err => console.log('err', err));
        }


        // if(!this.global.signedIn){
        //     if(!this.global.guest.name){
        //         let guestUser={
        //             name:this.state.name,
        //             email:this.state.email,
        //             phone:this.state.phone,
        //             address:this.state.address,
        //             orders:[order]
        //         };
        //         this.setGlobal({guest: guestUser});
        //     } else {
        //         let newOrders = this.global.guest.orders;
        //         newOrders.push(order);
        //         this.setGlobal(Object.assign(this.global.guest, {orders:newOrders}));
        //     }
        // }

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

        return (
            <section className='DashBoard' id='dashboard'>
                <Container fluid={true} className='mt-4 mb-5'>
                    {this.getGreeting()}
                    <Row className='mt-4 mx-2 mx-lg-0 '>
                        <Col lg='7'>
                            <Col md='12' className='orders-col py-3 mt-3 '>
                                <h2 className='my-2 text-center dash-title-text'>Your Bookings</h2>
                                <Row>
                                    {
                                        this.state.orders.map(
                                            (order) => (
                                                <Col xs='12' md='6' className='my-2' key={order.id}>
                                                    <OrderCard order={order} type={this.global.user.type}/>
                                                </Col>
                                            )
                                        )
                                    }
                                </Row>
                                {
                                    this.global.user.type !== 'retail' &&
                                    <Row className='justify-content-center mt-3'>
                                        <Link to={'/book'} className="btn btn-danger btn-xl text-light px-3 "> <span
                                            className="btn-text">Book Now</span></Link>
                                    </Row>
                                }
                            </Col>
                        </Col>
                        {
                            (this.global.user.name || this.global.guest.name) &&
                            <Col lg='5'>
                                <Col md='12' className='orders-col py-3 mt-3'>
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