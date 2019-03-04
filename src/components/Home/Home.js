import React, {useState} from 'react';
import './Home.css';
import titleImg from './images/funy2.jpeg';
import user1 from './images/face1.jpeg';
import user2 from './images/face2.jpeg'
import user3 from './images/face3.jpg';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faApple, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { faShippingFast, faWallet, faTshirt, faMapMarker,faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-bootstrap/Carousel";

class  Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            weightValue: 1,
            priceValue:20,
            contact:{
                name:'',
                email:'',
                phone:'',
                message:'',
            }
        };
    }

    handlePriceChange(event) {
        this.setState({weightValue: event.target.value, priceValue:event.target.value*20});

        document.querySelector('#weight').textContent= `${this.state.weightValue} Kg`;
        document.querySelector('#price').textContent= `${this.state.priceValue} ₹`;
    }

    render(){
    return (
        <div>
            <section id="title" >
                <div className='link-container'>
                    <span id='titleLink' className='jumptarget'></span>
                </div>
                <Container className='px-4'>
                    <Row>
                        <Col lg='6'>
                            <h1 className='main-title'>Stuck in an endless cycle of cleansing? We can help </h1>
                            <h2 className="filler-text">Introducing</h2>
                            <h1 className='text-primary title-text py-4 text-center'>Mr Laundry</h1>
                            <br/>
                            <h3 className='filler-text'>The solution to <em>some</em> of your problems in life</h3>
                            <h3 className='description-text my-3'>We collect, wash and deliver your laundry</h3>
                            <h2 className='description-text my-4'><em> So you can focus on the things that matter.</em></h2>
                            <h3 className='description-text my-2 mb-4'> lorem ipsum dolor color lorem ipsum dolor lorem ipsum dolor color lorem ipsum dolorlorem ipsum dolor color lorem ipsum dolor</h3>
                        </Col>
                        <Col lg='6' className="pl-3">
                            <img className="title-image ml-4 mb-3" src={titleImg} alt="title-image-mock"/>
                        </Col>
                    </Row>
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
            </section>


            <section id="why-us">
                <Container className='py-4 px-4'>
                    <Row>
                        <Col >
                            <h1 className='section-title text-center pb-3'>Why Us?</h1>
                        </Col>
                    </Row>
                        <Row>
                            <Col lg='4' className='text-center' >
                                <FontAwesomeIcon className='feature-icons my-3' icon={faShippingFast}/>
                                <h3 className='feature-text'>Faster than light</h3>
                                <p className='feature-desc'>Our handlers don't waste a second to ensure you gain a few.</p>
                            </Col>
                            <Col lg='4' className='text-center' >
                                <FontAwesomeIcon className='feature-icons my-3' icon={faWallet}/>
                                <h3 className='feature-text'>Easy on pocket</h3>
                                <p className='feature-desc'>Our competitive prices are guaranteed to blow you away.</p>
                            </Col>

                            <Col lg='4' className='text-center' >
                                <FontAwesomeIcon className='feature-icons my-3' icon={faTshirt}/>
                                <h3 className='feature-text'>Wash with care</h3>
                                <p className='feature-desc'> We're fabric experts and know how to ensure your clothes last long.</p>
                            </Col>
                        </Row>
                     </Container>

            </section>

            <section id='pricing' className='py-4 '>
                <div className='link-container'>
                    <span id='pricingLink' className='jumptarget'></span>
                </div>

                <Container >
                    <Row>
                        <Col >
                            <h1 className='section-title-light text-primary text-center pb-3'>Pricing</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-centered text-center mb-3 weightText'>
                            <span>Weight:</span>
                            <span className='ml-2' id='weight'>1 Kg</span>
                        </Col>
                    </Row>
                    <Row >

                        <Col xs='10' sm='8' className='col-centered' >
                            <input className="slider" onChange={(event) => this.handlePriceChange(event)} type="range"  value={this.state.weightValue}  min="1" max="11" step='1'/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='col-centered text-center mt-1 resultText'>
                            <span>Price:</span>
                            <span className='ml-2' id='price'>20 ₹</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-centered text-center mt-3 resultText'>
                            <h2 className='detail-pricing-link'>Detailed Pricing here </h2>
                        </Col>
                    </Row>
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
            </section>

            <section id="opinion" >
                <Container className='py-4'>
                    <Row>
                        <Col >
                            <h1 className='section-title text-center pb-3'>What people say</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='10' xs='11' className='col-centered my-3'>
                            <Carousel
                                controls={false}
                                indicators={false}
                                interval={3000}
                                pauseOnHover={false}

                            >

                                <Carousel.Item className='text-center center-block'>
                                        <h2 className='testimonial-text'>Life in a metro can be fast and doesn't leave time for family. Thanks to Mr Laundry I'm spending time with my kids!</h2>
                                        <img className="testimonial-image" src={user1} alt="user 1"/>
                                        <em className='testimonial-name'>Justin, New York</em>
                                </Carousel.Item>
                                <Carousel.Item className='text-center center-block'>
                                    <h2 className='testimonial-text'>University examinations? No problem cuz Mr Laundry's got us covered. Cheers!</h2>
                                    <br/>
                                    <img className="testimonial-image" src={user2} alt="user 1"/>
                                    <em className='testimonial-name'>Miranda,Arvin and Jessie, London</em>
                                </Carousel.Item>
                                <Carousel.Item className='text-center center-block'>
                                    <h2 className='testimonial-text'>As a professional coach, time management is key. I use Mr Laundry every week, every month. Their service always leaves a smile on my face.</h2>
                                    <img className="testimonial-image" src={user3} alt="user 1"/>
                                    <em className='testimonial-name'> Dexter, Miami</em>
                                </Carousel.Item>
                            </Carousel>
                        </Col>


                    </Row>
                </Container>

            </section>

            <section id='about'>
                <Container className='py-4 px-5'>
                    <Row>
                        <Col >
                            <h1 className='section-title-light  text-center pb-3'>About Us</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <h1 className='text-center pb-3 about-text'>We're a startup that's working day and night to give you the life you deserve. We believe that time is the most valuable resource and we aspire to give you more of this resource so you can live your life to the fullest.</h1>
                            <em className='quote-text '>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." </em>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id='contact'>
                <Container className='pt-4 px-4'>
                    <Row>
                        <Col >
                            <h1 className='section-title text-center pb-3'>Contact Us</h1>
                        </Col>
                    </Row>
                    <h3 className='text-center text-primary pb-4'>Drop Us a Message</h3>
                    <Row>
                        <Col md='4'>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name *" style={{'borderRadius':'1rem'}}
                                       value={this.state.contact.name}
                                       onChange={(event)=>{ this.setState(Object.assign(this.state.contact, {name: event.target.value})) }} />
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" style={{'borderRadius':'1rem'}}
                                       value={this.state.contact.email}
                                       onChange={(event)=>{ this.setState(Object.assign(this.state.contact, {email: event.target.value})) }} />
                            </div>
                            <div className="form-group">
                                <input type="text"  className="form-control" style={{'borderRadius':'1rem'}}
                                       placeholder="Your Phone Number *" value={this.state.contact.phone}
                                       onChange={(event)=>{ this.setState(Object.assign(this.state.contact, {phone: event.target.value}))}}
                                       />
                            </div>

                        </Col>
                        <Col md='5'>
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Your Message *"
                                          style={{width:'100%', height:'150px','borderRadius':'2rem'}}
                                          onChange={(event)=>{ this.setState(Object.assign(this.state.contact, {message: event.target.value}))}}
                                />
                            </div>
                            <button  className="btn btn-primary" style={{'borderRadius':'1rem'}}>Send Message</button>
                        </Col>

                        <Col md='3' className='text-center py-3'>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <FontAwesomeIcon className='contact-icon text-primary' icon={faMapMarker}/>
                                        <p>#91 block, HSR Layout, Bangalore</p>
                                    </li>

                                    <li>
                                        <FontAwesomeIcon className='contact-icon text-primary'  icon={faPhone}/>
                                        <p>+91 123 456 78 90</p>
                                    </li>

                                    <li>
                                        <FontAwesomeIcon className='contact-icon text-primary'  icon={faEnvelope}/>
                                        <p>contact@mrlaundry.com</p>
                                    </li>
                                </ul>


                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
    }
};

export default Home;