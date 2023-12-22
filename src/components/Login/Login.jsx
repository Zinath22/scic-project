

// import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
// import { useContext } from 'react';
// import {  FaGoogle } from 'react-icons/fa';
// import app from '../Firebase/firebase.config';
// import { AuthContext } from '../Providers/AuthProvider';
// import { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useRef } from 'react';
// import Swal from 'sweetalert2';

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef, useState } from "react";

import app from "../Firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";



const auth = getAuth(app);

const Login = () => {
  const { signIn, googleLogIn, logOut } = useContext(AuthContext);
  // const {signIn} = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire(
          'Success!',
          'Login successful',
          'success'
        );

        // Reset the form fields
        e.target.email.value = "";
        e.target.password.value = "";

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        if (error.message === "Firebase: Error (auth/invalid-login-credentials).") {
            Swal.fire(
                'Oops!',
                'Invalid user or password',
                'error'
            );
            console.log(error);
          return logOut();
        } else {
            if (error.message === "Cannot read properties of undefined (reading 'user')") {
               return Swal.fire(
                    'Oops!',
                    'Invalid user or password',
                    'error'
                );}
            console.log(error.message);
          setError(error.message);
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        // const loggedInUser = result.user
        console.log(result.user);
        // const user = { email };
        navigate(location?.state ? location.state : "/");
        // get access token 
        

      })
      .catch((error) => console.error(error));
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire(
        'Oops!',
        'Please enter your email address.',
        'error'
      );
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire(
          'Email Sent!',
          'A password reset email has been sent to your email address.',
          'success'
        );
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Oops!',
          'Failed to send password reset email. Please try again later.',
          'error'
        );
      });
  };

  return (
    <div>
      <p className="text-center text-amber-400">{error}</p>
      
          
            <div className="lg:w-1/2 w-full  my-10  font-bold mx-auto  py-10 px-12 bg-gradient-to-r from-purple-500 to-pink-500 ">
              <h2 className="text-3xl mb-4 text-center">Login</h2>
              <p className="mb-4 text-center">
                Please Login For Quick Access
              </p>
              <form onSubmit={handleLogin} className="text-black">
                <div className="mt-5">
                  <input
                    type="email"
                    name="email"
                    required
                    ref={emailRef}
                    placeholder="Email"
                    className="input rounded  w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="input rounded  w-full"
                  />
                </div>
                <div className="mt-5"></div>
                <div className="mt-5">
                <button className="w-full  bg-gradient-to-r from-amber-500 to-purple-500 py-3 text-center rounded text-white">Login Now</button>
                  <div className="flex text-sm justify-between items-center mt-5">
                    <p className="tmt-2">New To The Website? <Link to={'/register'}><span className="btn-link font-medium text-white">Register</span></Link></p>
                    <p className="btn-link cursor-pointer text-white" onClick={handleForgetPass}>Forgot password?</p>
                  </div>
                </div>
              </form>
              <div className="divider">or</div>
              <div className="space-y-3">
              <button onClick={handleGoogleLogin}
                 className=" btn-outline btn w-full bg-gradient-to-r  from-pink-500 to-purple-500  py-3 text-center rounded text-white" >
                    {/* <FaGoogle></FaGoogle> */}
                  Login In With Googleee</button>
              </div>
            </div>
         
        </div>

  );
};

export default Login;

