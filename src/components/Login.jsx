import { useRef, useState } from 'react';
import Header from './Header';
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const validateForm = () => {
    // validate data
    // console.log(email.current.value);
    // console.log(password.current.value);
    console.log('sign up / sign in?');
    console.log(`is sign in - ${isSignIn}`);
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //signup and sign in
    if (!isSignIn) {
      console.log('Going to sign up');
      //create user in firebase
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} : ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // after successful sign in i have to go to Browse page
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header className="absolute" />
      <div>
        <img
          className="absolute  bg-fixed "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute mt-40 mx-auto left-0 right-0 w-1/4 p-10
         bg-black text-white flex flex-wrap bg-opacity-80 rounded-lg">
          <h1 className="font-bold text-2xl ">{isSignIn ? ' Sign In ' : ' Sign Up '}</h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className=" px-3 py-2 mx-4  bg-gray-500 my-4 w-full"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder=" Email Address"
            className=" px-3 py-2 mx-4  bg-gray-500 my-4 w-full"
          />
          <input
            ref={password}
            type="password"
            placeholder=" Password "
            className=" px-3 py-2 mx-4 bg-gray-500  my-4 w-full"
          />
          <p className="px-3 py-2 font-bold text-lg text-red-500">{errorMessage}</p>
          <button
            type="submit"
            onClick={validateForm}
            className="px-3 py-2 mx-4 my-4  bg-red-800 w-full rounded-lg">
            {isSignIn ? ' Sign In ' : ' Sign Up '}
          </button>

          <p className=" p-4 mx-2" onClick={toggleForm}>
            {isSignIn ? ' New to Netflix ? Sign Up now' : ' Already Registered? Sign In now'}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
