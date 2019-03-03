import React from 'react';
import './Regsiter.css';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            password:'',
            phone:'',
            address:'',
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm='9' md='7' lg='5' className="mx-auto">
                        <Card className="card-signin my-5">

                            <Card.Body>
                                <Card.Title className="text-center boi">Register</Card.Title>

                                <div className="form-label-group">
                                    <input type="text" id="inputName" className="form-control"
                                           placeholder="Name" required autoFocus
                                           value={this.state.name}
                                           onChange={ (event) => {this.setState({name: event.target.value}) }}
                                    />
                                    <label htmlFor="inputName">Name</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address" required
                                           value={this.state.email}
                                           onChange={ (event) => {this.setState({email: event.target.value}) }}
                                    />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Password" required
                                           value={this.state.password}
                                           onChange={ (event) => {this.setState({password: event.target.value}) }}
                                    />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="text" id="inputPhone" className="form-control"
                                           placeholder="Phone" required
                                           value={this.state.phone}
                                           onChange={ (event) => {this.setState({phone: event.target.value}) }}
                                    />
                                    <label htmlFor="inputPhone">Phone</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="textarea" id="inputName" className="form-control"
                                           placeholder="Name" required autoFocus
                                           value={this.state.name}
                                           onChange={ (event) => {this.setState({name: event.target.value}) }}
                                    />
                                    <label htmlFor="inputName">Name</label>
                                </div>



                                <button className="btn btn-lg btn-primary btn-block text-uppercase">Sign
                                    in
                                </button>
                                <hr className="my-4"/>
                                <button className="btn btn-lg btn-google btn-block "
                                        style={{color:'white', backgroundColor:"#ea4335"}}
                                >
                                    <FontAwesomeIcon icon={faGoogle} className='mr-2'/> Sign in with Google
                                </button>
                                <button className="btn btn-lg btn-block"
                                        style={{color:'white', backgroundColor:"#3b5998"}}
                                >
                                    <FontAwesomeIcon icon={faFacebook} className='mr-2'/> Sign in with Facebook
                                </button>

                                <div className='my-3 '>
                                    <Link className='btn btn-info btn-lg btn-block text-uppercase' to='/register'>
                                        Register
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Register;