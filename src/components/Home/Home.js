import React from 'react';
import './Home.css';
import titleImg from './funy.jpeg' ;
const Home = () =>  {
    return (
        <div className='container-fluid'>
            <section id="title">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Stuck in an endless cycle of cleansing? We can help </h1>
                        <h2 className="filler-text">Introducing</h2>
                        <h1 className='text-primary title-text'>Mr Laundry</h1>
                        <br/>
                        <h3 className='filler-text'>The solution to *some* of your problems in life</h3>

                    </div>
                    <div className="col-lg-6 px-3 py-4" >
                        <img className="title-image ml-4 my-1" src={titleImg} alt="iphone-mockup"/>
                    </div>

                </div>
                <button className="btn btn-dark btn-lg download-button" type="button"><i
                    className="fab fa-apple"></i>Download
                </button>
                <button className="btn btn-outline-light btn-lg download-button" type="button"><i
                    className="fab fa-google-play"></i>
                    Download
                </button>

            </section>
        </div>





    );
};

export default Home;