import React from 'react';
import ErrorPhoto from '../../image/Error.png';
const Error = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-5 m-auto ">
                <img src={ErrorPhoto} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Error;