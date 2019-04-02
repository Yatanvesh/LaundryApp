import React from 'reactn';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons';

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
        if(this.global.registerSuccess)
            this.props.history.push('/signin');
        return (
            <Container className='SignIn'>
                {/*To allow sharing of css styles b/w SignIn and Register components*/}
                <Row>
                    <Col sm='9' md='7' lg='5' className="mx-auto">
                        <Card className="card-signin my-5">
                            <Card.Body>
                                <Card.Title className="text-center boi">Register</Card.Title>

                                <div className="cool-input">
                                    <input type="text" id="inputName" className="form-control"
                                           placeholder="Name" required autoFocus
                                           value={this.state.name}
                                           onChange={ (event) => {this.setState({name: event.target.value}) }}
                                    />
                                    <label htmlFor="inputName">Name</label>
                                </div>

                                <div className="cool-input">
                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address" required
                                           value={this.state.email}
                                           onChange={ (event) => {this.setState({email: event.target.value}) }}
                                    />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>

                                <div className="cool-input">
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Password" required
                                           value={this.state.password}
                                           onChange={ (event) => {this.setState({password: event.target.value}) }}
                                    />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                <div className="cool-input">
                                    <input type="text" id="inputPhone" className="form-control"
                                           placeholder="Phone" required
                                           value={this.state.phone}
                                           onChange={ (event) => {this.setState({phone: event.target.value}) }}
                                    />
                                    <label htmlFor="inputPhone">Phone</label>
                                </div>

                                <div className="cool-input">
                                    <textarea  id="inputAddress" className="form-control" required
                                               placeholder='Address'
                                           value={this.state.address}
                                               style={{width:'100%', height:'150px','borderRadius':'2rem'}}
                                           onChange={ (event) => {this.setState({address: event.target.value}) }}
                                    />
                                    <label htmlFor="inputAddress"></label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block btn-register "
                                        onClick={()=> {
                                            this.props.onRegister(this.state);
                                        }}>Register
                                </button>
                                <hr className="my-4"/>
                                <button className="btn btn-lg  btn-block "
                                        style={{color:'white', backgroundColor:"#ea4335"}}>
                                    <FontAwesomeIcon icon={faGoogle} className='mr-2'/> Sign in with Google
                                </button>
                                <button className="btn btn-lg btn-block"
                                        style={{color:'white', backgroundColor:"#3b5998"}}
                                >
                                    <FontAwesomeIcon icon={faFacebook} className='mr-2'/> Sign in with Facebook
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Register;