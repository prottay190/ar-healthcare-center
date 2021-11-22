import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';
import { Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const { singInUsingGoogle, toggoleLogin, logInWithEmailAndPass, user, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //redir
    const history = useHistory();
    const location = useLocation()

    const uri = location.state?.form || "/home";

    const handleGetEmail = e => {
        //  console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handleGetPass = e => {
        //  console.log(e.target.value)
        setPassword(e.target.value)
    }
    const handleLogInemailandPass = (e) => {
        e.preventDefault()
        logInWithEmailAndPass(email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                history.push(uri)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div>
            <div id="/login" className="from-container p-5 mt-2">
                <h2 className="text-light">Create Account</h2>
                <Form onSubmit={handleLogInemailandPass}>
                    <Row>
                        <Col>
                            <Form.Control onBlur={handleGetEmail} type="email" placeholder="Type your Email" />
                            <br />
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control onBlur={handleGetPass} type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Col>
                        <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggoleLogin} type="checkbox" label="Alredy Registered" />
                        </Form.Group>
                    </Row>
                    <br />
                    <Button variant="primary" type="submit">
                        LogIn
                    </Button>
                </Form>
                <p className="text-light">new to AR HealthCare Center ? <Link to="/register">Create Account</Link></p>
                <div className="text-light m-3">------------------------------OR-----------------------------</div>
                <button onClick={singInUsingGoogle} className="btn btn-warning"><FaGoogle />  Google SingIn</button>

            </div>
        </div>
    );
};

export default Login;