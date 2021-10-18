import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
     const {singInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please LogIn</h2>
            <button onClick={singInUsingGoogle} className="btn btn-warning">Google SingIn</button>
        </div>
    );
};

export default Login;