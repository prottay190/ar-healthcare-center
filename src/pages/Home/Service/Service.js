import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './Service.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, img, description} = service;
    return (
        <div>
            <Col>
            <Card className="m-2" style={{ width: '26rem' }}>
            <Card.Img variant="top" className="service-img" src={img} />
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
                <h3>Name: {name}</h3>
                <p>Description: {description}</p>
           <Link to={`/serviceDetails/${description}`}><button className="btn btn-warning"><FaArrowAltCircleRight /> Show Details</button></Link>
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>
                
        </div>
    );
};

export default Service;