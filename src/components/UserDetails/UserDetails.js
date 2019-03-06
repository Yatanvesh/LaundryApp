import React, {useGlobal} from 'reactn';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import './UserDetails.css';

const UserDetails = () =>  {
    const [user] = useGlobal('user');
    const [guest] = useGlobal('guest');
    // const [signedIn, setSignedIn] =useGlobal('signedIn');

    return (
        <ul className="list-group list-group-dark-custom">
            <li className="list-group-item my-1 ">
                Name:
                <span className='user-properties '> {user.name||guest.name} </span>
                <FontAwesomeIcon className='mx-3 edit-icon' icon={faEdit}/>
            </li>

            <li className="list-group-item my-1">
                Email:
                <span className='user-properties'> {user.email ||guest.email} </span>

            </li>

            <li className="list-group-item my-1">
                Phone:
                <span className='user-properties'> {user.phone||guest.phone} </span>
                <FontAwesomeIcon className='mx-3 edit-icon'  icon={faEdit}/>
            </li>

            <li className="list-group-item my-1 mb-4">
                Address:
                <span className='user-properties'> {user.address ||guest.address} </span>
                <FontAwesomeIcon className='mx-3 edit-icon' icon={faEdit}/>
            </li>
        </ul>

    );
};

export default UserDetails;
