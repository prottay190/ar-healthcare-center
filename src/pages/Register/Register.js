import React, {useState} from 'react';
import { Form, Button, Row, Col, FloatingLabel} from 'react-bootstrap';
import './Register.css';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {
    const {singInUsingGoogle,  createAccountWithGoogle, user} = useAuth();
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [name, setName] =useState('');

    const handleRegistion = e =>{
        e.preventDefault();
        createAccountWithGoogle(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    const handleGEtName = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleGetEmail = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handleGetPassword = e => {
        console.log(e.target.value)
        SetPassword(e.target.value)
    }

    //firebase email pass
   
    
    return (
        <div>
            <div className="from-container p-5 mt-2">
                <h2 className="text-light">Create Account</h2>
                <Form onSubmit={handleRegistion}>
                    <Row>
                        <Col>
                        <input type="text" onBlur={handleGEtName} placeholder="name" />
                        <Form.Control type="email" onBlur={handleGetEmail} placeholder="Type your Email" />                 
                        <br />
                        <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur={handleGetPassword} type="password" placeholder="Password" />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <br />
                    <Button  variant="primary" type="submit">
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