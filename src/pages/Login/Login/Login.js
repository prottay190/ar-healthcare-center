import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';
import { Col, Form, Row, Button,FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
     const {singInUsingGoogle, handleEmail, handlePassword, handleResetpassword, toggoleLogin } = useAuth();
    return (
        <div>
         <div id="/login" className="from-container p-5 mt-2">
                <h2 className="text-light">Create Account</h2> 
                 <Form >
                    <Row>
                        <Col>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Type your Email" />               
                        <br />
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </FloatingLabel>
                        </Col>
                        <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggoleLogin} type="checkbox" label="Alredy Registered" />
                        </Form.Group>
                    </Row>
                    <br />
                    <Button onClick={handleResetpassword} variant="primary" type="submit">
                        LogIn
                    </Button>
                </Form>
                <p className="text-light">new to AR HealthCare Center? <Link to="/register">Create Account</Link></p>
                <div className="text-light m-3">------------------------------OR-----------------------------</div>
                <button onClick={singInUsingGoogle} className="btn btn-warning"><FaGoogle />  Google SingIn</button>
            </div>
        </div>
    );
};

export default Login;