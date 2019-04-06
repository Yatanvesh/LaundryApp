import React from 'reactn';
import './Book.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from 'react-select';
import TimeRangeSlider from 'react-time-range-slider';
import {Link} from "react-router-dom";
import UserDetails from "../../components/UserDetails/UserDetails";

const serviceOptions = [
    {value: 'washOnly', label: 'Wash Only'},
    {value: 'dryClean', label: 'Dry Clean'},
    {value: 'steamIron', label: 'Steam Iron'}
];

const weightOptions = [
    {value: -1, label: 'Auto Detect'},
    {value: 1, label: '1 Kg'},
    {value: 2, label: '2 Kg'},
    {value: 3, label: '3 Kg'},
    {value: 4, label: '4 Kg'},
    {value: 5, label: '5 Kg'},
    {value: 6, label: '6 Kg'},
    {value: 7, label: '7 Kg'},
    {value: 8, label: '8 Kg'},
    {value: 9, label: '9 Kg'},
    {value: 10, label: '10 Kg'},
];

const cityOptions = [
    {value: 'Ambala', label: 'Ambala'},
    {value: 'Bangalore', label: 'Bangalore'},
    {value: 'Chennai', label: 'Chennai'},
    {value: 'Mumbai', label: 'Mumbai'},
    {value: 'Pyagraj', label: 'Pyagraj'},
    {value: 'Kolkata', label: 'Kolkata'},
];

class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.global.user.name,
            email: this.global.user.email,
            phone: this.global.user.phone,
            address: this.global.user.address,
            services: null,
            weight: 1,
            city: '',
            timeRange: {
                start: "10:30",
                end: "19:00"
            },
            special: '',
            col: {
                xs: 12,
                sm: 10,
                md: 8
            }
        }
    }

    handleBooking = () => {
        console.log('handlebooking called');
        let orderId= Math.floor( Math.random()*1000000);
        let order = {
            id:orderId,
            services: this.state.services.map(
                (service) => service
            ),
            weight: this.state.weight,
            city:this.state.city,
            startTime:this.state.timeRange.start,
            endTime:this.state.timeRange.end,
            special:this.state.special,
            status:'Requested'
        };
        console.log('order', order);
        if(this.global.signedIn){

            fetch("http://localhost:3005/createOrder", {
                method:'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({order: order, email:this.global.user.email})
            })
                .then(response => response.json())
                .then( result => {
                    if(result.action === 'success'){
                        this.props.history.push('./dashboard');
                    } else {
                        //handleError
                    }

                })
                .catch(err => console.log('err', err));
        }





    };

    render() {
        let {xs, sm, md} = this.state.col;

        return (
            <section id='bookForm' className='Book mt-4 mb-5 mx-3'>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col>
                            <h1 className='section-title mb-2 '>Book Now</h1>
                            {
                                !this.global.user.name &&
                                <h5 className='section-subtitle text-info pb-2 '>
                                    Booking as Guest
                                    <Link to='/signin' className='btn btn-info btn-sm ml-3'>Sign In</Link>
                                    <Link to='/register' className='btn btn-warning btn-sm ml-3'>Register</Link>
                                </h5>
                            }
                        </Col>
                    </Row>
                    {!this.global.user.name &&
                    <div>

                        <Row className='justify-content-center'>
                            <Col xs={xs} sm={sm} md={md}>
                                <div className="cool-input">
                                    <input type="text" id="inputName" className="form-control"
                                           placeholder="Name" required autoFocus
                                           value={this.state.name}
                                           style={{'borderRadius': '0.5rem'}}
                                           onChange={(event) => {
                                               this.setState({name: event.target.value})
                                           }}
                                    />
                                    <label htmlFor="inputName">Name</label>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xs={xs} sm={sm} md={md}>
                                <div className="cool-input">
                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address" required
                                           style={{'borderRadius': '0.5rem'}}
                                           value={this.state.email}
                                           onChange={(event) => {
                                               this.setState({email: event.target.value})
                                           }}
                                    />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xs={xs} sm={sm} md={md}>
                                <div className="cool-input">
                                    <input type="text" id="inputPhone" className="form-control"
                                           placeholder="Phone" required
                                           value={this.state.phone}
                                           style={{'borderRadius': '0.5rem'}}
                                           onChange={(event) => {
                                               this.setState({phone: event.target.value})
                                           }}
                                    />
                                    <label htmlFor="inputPhone">Phone</label>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xs={xs} sm={sm} md={md}>
                                <div className="cool-input">
                                    <textarea id="inputAddress" className="form-control" required
                                              placeholder='Address'
                                              value={this.state.address}
                                              style={{width: '100%', height: '100px', 'borderRadius': '0.5rem'}}
                                              onChange={(event) => {
                                                  this.setState({address: event.target.value})
                                              }}
                                    />

                                </div>
                            </Col>
                        </Row>
                    </div>
                    }
                    {this.global.user.name &&
                    <Row className='justify-content-center'>
                        <Col xs={xs} sm={sm} md={md}>
                            <UserDetails/>
                        </Col>
                    </Row>
                    }

                    <Row className='justify-content-center'>
                        <Col xs={xs} sm={sm} md={md}>
                            <div className="cool-input">
                                <Select
                                    className='service-selector'
                                    value={this.state.services}
                                    onChange={(selectedOption) => {
                                        this.setState({services: selectedOption})
                                    }}
                                    options={serviceOptions}
                                    placeholder="Select Service(s) that apply"
                                    isMulti={true}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={xs} sm={sm} md={md}>
                            <div className="cool-input">
                                <Select
                                    className='service-selector'
                                    value={this.state.weight}
                                    onChange={(selectedOption) => {
                                        this.setState({weight: selectedOption})
                                    }}
                                    options={weightOptions}
                                    placeholder="Select Laundry Weight"

                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={xs} sm={sm} md={md}>
                            <div className="cool-input">
                                <Select
                                    className='service-selector'
                                    value={this.state.city}
                                    onChange={(selectedOption) => {
                                        this.setState({city: selectedOption})
                                    }}
                                    options={cityOptions}
                                    placeholder="Select City"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={xs} sm={sm} md={md}>
                            <div className='bg-white px-4 py-1 rounded'>
                                <div>Select Preferred Time Range</div>
                                <div className='ml-2 d-flex justify-content-between' id='price'>
                                    <div> From:<span id='fromTime'>{this.state.timeRange.start}</span></div>
                                    <div> To:<span id='endTime'>{this.state.timeRange.end}</span></div>
                                </div>
                                <TimeRangeSlider
                                    disabled={false}
                                    format={24}
                                    maxValue={"20:00"}
                                    minValue={"10:00"}
                                    name={"time_range"}
                                    onChange={
                                        (time) => {
                                            this.setState({
                                                timeRange: time
                                            })
                                        }
                                    }
                                    step={30}
                                    value={this.state.timeRange}
                                    className='time-range'
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={xs} sm={sm} md={md}>
                            <div className="cool-input mt-3">
                                    <textarea className="form-control"
                                              placeholder='Special Instructions(optional)'
                                              value={this.state.special}
                                              style={{width: '100%', height: '70px', 'borderRadius': '0.5rem'}}
                                              onChange={(event) => {
                                                  this.setState({special: event.target.value})
                                              }}
                                    />

                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={xs} sm={sm} md={md} className='text-center '>
                            <button className="btn btn-danger btn-block btn-xl text-light px-3 "
                                    onClick={() => this.handleBooking()}
                            >
                                <span className="btn-text">BOOK NOW</span>
                            </button>
                        </Col>
                    </Row>


                </Container>
            </section>
        );
    }
}

export default Book;