import React from 'reactn';
import './SignIn.css';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import Alert from "react-bootstrap/Alert";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
            remember:true,
            failed:false
        }
    }

    handleSignIn(){
        let result = this.props.onSignIn(this.state, this.props.history);
        if(result===false){
                this.setState({failed:true});
        }
    }
    render() {
        return (
            <Container className='SignIn'>
                <Row>
                    <Col sm='9' md='7' lg='5' className="mx-auto">
                        <Card className="card-signin my-5">

                            <Card.Body>
                                <Card.Title className="text-center boi">Sign In</Card.Title>
                                <form>
                                <div className="cool-input">
                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address" required autoFocus
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

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"
                                    checked={this.state.remember}
                                           onChange={ () => {
                                                this.setState({remember: !this.state.remember})
                                           }}
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember
                                        Me</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={() =>  this.handleSignIn() }>
                                    Sign In
                                </button>

                                </form>

                               <Alert dismissible show={this.state.failed} variant='danger' className='mt-4' onClose={ () => {this.setState({failed:false} )} } >
                                   <p>Invalid email or password</p>
                               </Alert>

                                <hr className="my-4"/>
                                <button className="btn btn-lg btn-block btn-signin "
                                        style={{color:'white', backgroundColor:"#ea4335"}}
                                >
                                    <FontAwesomeIcon icon={faGoogle} className='mr-2'/> Sign in with Google
                                </button>
                                <button className="btn btn-lg btn-block btn-signin"
                                style={{color:'white', backgroundColor:"#3b5998"}}
                                >
                                    <FontAwesomeIcon icon={faFacebook} className='mr-2'/> Sign in with Facebook
                                </button>

                                <div className='my-3 '>
                                    <Link className='btn btn-info btn-lg btn-block btn-signin' to='/register'>
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

export default SignIn;