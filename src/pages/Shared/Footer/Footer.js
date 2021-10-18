import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FaElementor, FaPhoneSquareAlt, FaMobile } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                   <Col lg={4}>
                       <h3>Hospital</h3>
                       <p className="footer-text">A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.</p>

                       <br />
                       <br />
                       <br />
                       <h4 className="footer-text">Hospital</h4>
                       <p className="footer-text"><small>Chorpara Road, Mymensingh</small><br />
                       <small>Dhaka,Bangladesh.</small></p>
                   </Col>
                   <Col lg={4}>
                       <h3>Latest Update</h3>
                       <div className="footer-text">
                           <h6><FaElementor /> Together We Can Do So Much</h6>
                           <p>18 OCT 2021</p>
                       </div>
                       <div className="footer-text mt-2">
                           <h6><FaElementor /> The Three Surgical Team</h6>
                           <p>18 OCT 2021</p>
                       </div>
                       <div className="footer-text mt-2">
                           <h6><FaElementor /> Together We Can Do So Much</h6>
                           <p>18 OCT 2021</p>
                       </div>
                   </Col>
                   <Col lg={4}>
                       <h3>Contact</h3>
                       <div className="footer-text">
                           <p>Our HotLIne: heaalth.care@hotmail.com</p>
                           <p><FaPhoneSquareAlt /> Our TelePhone: 09845111782</p>
                           <p>Our Email: aarnob2020@gmail.com</p>
                           <p><FaMobile /> Our Mobile: 01711111110</p>
                       </div>
                   </Col>
                </Row>
                <Row>
                    <h5 className="footer-text">© Copyright 2021 Hospital  - All Rights Reserved By Prottay Roy Arnob </h5>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;