import React from 'react';
import { Form, Button, Row, Col, FloatingLabel} from 'react-bootstrap';
import './Register.css';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {
    const {singInUsingGoogle, handleRegistion, handleEmail, handlePassword, handleResetpassword} = useAuth();
    
    return (
        <div>
            <div className="from-container p-5 mt-2">
                <h2 className="text-light">Create Account</h2>
                <Form onSubmit={handleRegistion}>
                    <Row>
                        <Col>
                        <Form.Control type="email" onBlur={handleEmail} placeholder="Type your Email" />                 
                        <br />
                        <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <br />
                    <Button onClick={handleResetpassword} variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className="text-light">Already have an account? <Link to="/login">Login</Link></p>
                <div className="text-light m-3">------------------------------OR-----------------------------</div>
                <button onClick={singInUsingGoogle} className="btn btn-warning"><FaGoogle />  Google SingIn</button>
            </div>
        </div>
    );
};

export default Register;