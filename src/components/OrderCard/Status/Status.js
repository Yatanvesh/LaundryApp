import React from 'react';
import './Status.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faCheckCircle, faColumns, faRupeeSign, faTruck} from '@fortawesome/free-solid-svg-icons'

const progress = 2;
const Status = (propsss) => {
    let props = {
        optedDelivery: false,
        booked:'onGoing',
        // pickedUp: 'finished',
        washed:'pending',
        // dropOff:'pending',
        payment:'pending'
    };

    return (
        <>
            <div className='Status justify-content-center'>
                <FontAwesomeIcon className={props.booked} icon={faCheckCircle}/>
                <FontAwesomeIcon className={props.pickedUp} icon={faAngleRight}/>

                {/*{*/}
                    {/*props.optedDelivery &&*/}
                    {/*<>*/}
                        {/*<FontAwesomeIcon className={props.pickedUp} icon={faTruck}/>*/}
                        {/*<FontAwesomeIcon className={props.washed} icon={faAngleRight}/>*/}
                    {/*</>*/}
                {/*}*/}


                <FontAwesomeIcon className={props.washed} icon={faColumns}/>
                <FontAwesomeIcon className={props.dropOff} icon={faAngleRight}/>

                {/*{*/}
                    {/*props.optedDelivery &&*/}
                    {/*<>*/}
                        {/*<FontAwesomeIcon className={props.dropOff} icon={faTruck}/>*/}
                        {/*<FontAwesomeIcon className={props.payment} icon={faAngleRight}/>*/}
                    {/*</>*/}
                {/*}*/}
                <FontAwesomeIcon className={props.payment} icon={faRupeeSign}/>
            </div>

        </>
    )
}

export default Status;