import React from 'react';
import {  useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

const ServiceDetails = () => {
    const {serviceDescription} = useParams();
    
    
    return (
        <div className="p-4">
            <h2>Description</h2>
            <p>{serviceDescription}</p>
            <Link to="/home"><button  className="btn btn-primary"><FaArrowCircleLeft /> Go Back</button></Link>
        </div>
    );
};

export default ServiceDetails;