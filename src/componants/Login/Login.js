import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseInitializeApp from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



firebaseInitializeApp();

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const { signInUsingGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    const auth = getAuth();


    //Check Button login/Register 

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    // Handle Email Change

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    // Handle Password Change

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    // Handle Registration

    const handleRegistration = (e) => {
        e.preventDefault()
        // const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (password.length < 6) {
            setError('Password Should Be At Least 6 Characters')
            return;
        }
        // if (!filter.test(password)) {
        //   setError('Password Should be number and symbol');
        //   return;
        // }
        // Calling Space
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // logged in 
                const user = userCredential.user;
                console.log(user)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <div className="container border mt-4 mb-5">
            <div className="bg-light">
                <h2 className="text-dark p-3 text-center mb-3">{isLogin ? 'Login' : 'Register'} Now!</h2>

                <div className="text-center"><h4>Or</h4> <br /><button onClick={handleGoogleSignIn} className="btn btn-danger">Log in With Google Account!</button> </div>
                <div className="mx-5">
                    <form onSubmit={handleRegistration}>

                        {isLogin ? <p></p> : <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Your Full Name</label>
                            <input onBlur={handleEmailChange} type="text" className="form-control" id="exampleInputName" aria-describedby="textHelp" required />
                        </div>}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Already Registered?</label>
                        </div>
                        <p className="text-danger"> {error}</p>
                        <button type="submit" className="btn btn-primary mb-3">{isLogin ? 'Login' : 'Register'}</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;