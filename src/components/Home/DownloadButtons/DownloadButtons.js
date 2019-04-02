import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";


const DownloadButtons = () =>  {
    return (
        <div className='my-4'>
            <div className='text-center mt-2'>
                <Link to={'/book'} className="btn btn-danger btn-xl text-light px-3 "> <span
                    className="btn-text">Book Now</span></Link>
            </div>
            <div className='text-center'>
                <button className="btn btn-dark btn-lg app-download-button mx-2" type="button">
                    <FontAwesomeIcon icon={faApple}/>
                    <span className='pl-1'>Download</span>
                </button>

                <button className="btn btn-outline-light btn-lg app-download-button mx-2" type="button">
                    <FontAwesomeIcon icon={faGooglePlay}/>
                    <span className='pl-1'>Download</span>
                </button>
            </div>
        </div>
    );
};

export default DownloadButtons;