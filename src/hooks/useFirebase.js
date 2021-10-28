import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile,sendEmailVerification, sendPasswordResetEmail} from "firebase/auth";
import React, { useEffect, useState } from 'react';
import initializeAuthentication from "../pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    const auth = getAuth();
    
     // google sing in
    const singInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
       .then(result =>{
           setUser(result.user)
       })
       .finally(() =>setIsLoading(false));

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


     //google sing out
     const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    }

    //email and password
   const createAccountWithGoogle = (email, password) =>{
       console.log(email,password)
   return createUserWithEmailAndPassword(auth, email, password);

   }

   const logInWithEmailAndPass = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
   }



  const toggoleLogin = e =>{
    setIsLogin(e.target.checked)
  }

    return{
        user,
        setUser,
        singInUsingGoogle,
        createAccountWithGoogle,
        logInWithEmailAndPass,
        logOut,
        toggoleLogin      
    }
};

export default useFirebase;