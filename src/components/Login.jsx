import { useRef, useState } from "react";
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
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message !== null) return;

    if (!isSignInForm) {
      //signup form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/49611182?v=4&size=64",
          })
            .then(() => {
              // Profile updated!
              const user = auth.currentUser;
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                }),
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin form
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
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="pt-20 bg-red-950 min-h-screen flex justify-center items-center">
        <form onSubmit={handleButtonClick} className="flex flex-col w-4/12">
          <h1 className=" text-white text-3xl font-bold">
            Enter your info to {isSignInForm ? "sign in" : "sign up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={displayName}
              type="text"
              placeholder="Full Name"
              className="bg-gray-950 text-white w-full mt-3 mb-3 p-3 rounded-sm border-white border"
            />
          )}
          <input
            ref={email}
            type="text"
            // autoComplete="off"
            placeholder="Email"
            className="bg-gray-950 text-white w-full mt-3 mb-3 p-3 rounded-sm border-white border"
          />
          <input
            ref={password}
            type="password"
            // autoComplete="new-password"
            placeholder="Password"
            className=" bg-gray-950 text-white w-full mt-3 mb-3 p-3 rounded-sm border-white border"
          />
          <p className="text-red-700">{errorMessage}</p>
          <button
            type="submit"
            className="bg-red-700 text-white font-bold w-full p-3 mt-3 rounded-sm cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-4 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a user? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
