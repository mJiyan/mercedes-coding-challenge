import React from 'react';
import { Spinner } from 'react-bootstrap';

const Redirect = () => {

    return (
        <div className="">
            <h5>Redirecting...</h5>
            <Spinner className="spinner" animation="border" role="status" />
        </div>

    )
}



export default Redirect;