import React from 'react';
import { Route, useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceDescription} = useParams();
    
    
    return (
        <div className="p-4">
            <h2>Description</h2>
            <p>{serviceDescription}</p>
        </div>
    );
};

export default ServiceDetails;