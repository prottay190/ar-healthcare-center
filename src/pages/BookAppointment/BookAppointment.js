import React from 'react';
import { Form, Row, Button, Col,  } from 'react-bootstrap';
import './BookAppointment.css'

const BookAppointment = () => {
    return (
        <div className="book-appointment p-5">
       <Form className="m-3">
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Text" placeholder="Type your Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Number</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>
                </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridname">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control type="password" placeholder="Doctor Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Department's Name</Form.Label>
                <Form.Control type="password" placeholder="Department's Name" />
                </Form.Group>
            </Row>
            

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address </Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose">
                    <option>Dhaka</option>
                    <option>Mymensingh</option>
                    <option>Chittagong</option>
                    <option>Sylet</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>


            <Button  variant="success" size="lg" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    );
};

export default BookAppointment;