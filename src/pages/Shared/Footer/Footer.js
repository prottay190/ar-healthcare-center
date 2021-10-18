import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                   <Col lg={4}>
                       <h3>Hospital</h3>
                   </Col>
                   <Col lg={4}>hi</Col>
                   <Col lg={4}>hi</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;