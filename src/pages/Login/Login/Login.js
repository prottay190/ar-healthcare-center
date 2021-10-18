import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
     const {singInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please LogIn</h2>
            <button onClick={singInUsingGoogle} className="btn btn-warning"><FaGoogle />  Google SingIn</button>
        </div>
    );
};

export default Login;