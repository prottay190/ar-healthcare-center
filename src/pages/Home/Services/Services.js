import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div className="services-section">
            <h2>Our Services</h2>
            <div className="single-service">
                 <Row lg={3} md={2} sm={1}>
                            {
                            services.map(service => <Service
                                key={service.id}
                                service ={service}
                            >
                            </Service>)
                        }     
                 </Row>
            </div>
        </div>
    );
};

export default Services;