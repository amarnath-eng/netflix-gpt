import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullname = useRef("");
  const email = useRef("");
  const password = useRef("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(
      isSignInForm,
      fullname.current?.value,
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
    if (message) return;

    //Sign In & Sign Up Logic
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_small.jpg 959w"
          alt=""
          aria-hidden="true"
          className="h-[100vh] w-full object-cover object-center"
        />
        <div className="absolute top-0 h-full w-full flex justify-center items-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-3/12 flex flex-col bg-black bg-opacity-90 text-white p-6 rounded-lg"
          >
            <h1 className="font-bold text-3xl mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={fullname}
                type="text"
                placeholder="Full Name"
                className="p-2 bg-gray-800 rounded-lg mb-4"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-2 bg-gray-800 rounded-lg"
            />
            <input
              ref={password}
              type="text"
              placeholder="password"
              className="p-2 mt-4 bg-gray-800 rounded-lg"
            />
            <p className="text-red-600 font-bold mt-2">{errorMessage}</p>
            <button
              className="p-2 bg-red-600 text-white my-6 rounded-lg"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="cursor-pointer" onClick={toggleSignIn}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
