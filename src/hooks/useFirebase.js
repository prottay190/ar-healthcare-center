import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import initializeAuthentication from "../pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    
     //sing in
    const singInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
       .then(result =>{
           setUser(result.user)
       })

    }

    //users stateChange
    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
    },[])


     //sing out
     const logOut = () =>{
        signOut(auth)
        .then(() => {})
    }

    return{
        user,
        singInUsingGoogle,
        logOut
        
    }
};

export default useFirebase;