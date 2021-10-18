import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-img/successful-medical-team.png';
import banner2 from '../../../images/banner-img/young-female-surgeon-with-medical-team-back-before-surgery.png';

const Banner = () => {
    return (
        <>
        <Carousel className='pt-2'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Our HealthCare Center</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Our HealthCare Center</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Banner;