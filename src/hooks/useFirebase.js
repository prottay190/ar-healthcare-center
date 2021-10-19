import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile,sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import initializeAuthentication from "../pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
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
    const handleRegistion = e =>{
        e.preventDefault();

        if(password.length < 6){
            setError('password must be at least 6 charecter')
            return;
          }
          if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('password must contain 2 upperCase')
            return;
          }

        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }

    const processLogin = (email, password) =>{
          signInWithEmailAndPassword(auth, email, password)
          .then(result =>{
              setUser(result.user)
                               
          })
        
    }

    const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
           
            
        })
      
    }

    const setUserName =() =>{
         updateProfile(auth.currentUser, {displayName: name})
         .then(result =>{ })
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then( result => {
          console.log(result)
        })
      }

   const handleEmail = e =>{
       setEmail(e.target.value)
   }
    
   const handlePassword = e =>{
       setPassword(e.target.value)
   }

   const handleResetpassword =() =>{
    sendPasswordResetEmail(auth, email) 
    .then(result => {

    })
  }

  const toggoleLogin = e =>{
    setIsLogin(e.target.checked)
  }

    return{
        user,
        singInUsingGoogle,
        logOut,
        handleRegistion,
        processLogin,
        handleEmail,
        handlePassword,
        handleResetpassword,
        verifyEmail ,
        toggoleLogin      
    }
};

export default useFirebase;