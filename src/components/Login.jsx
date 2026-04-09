import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    setErrorMessage(
      checkValidData(email.current.value, password.current.value),
    );


  };

  return (
    <div>
      <Header />
      <div className="pt-20 bg-red-950 min-h-screen flex justify-center items-center">
        <form className="flex flex-col w-4/12">
          <h1 className=" text-white text-3xl font-bold">
            Enter your info to {isSignInForm ? "sign in" : "sign up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-950 text-white w-full mt-3 mb-3 p-3 rounded-sm border-white border"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="bg-gray-950 text-white w-full mt-3 mb-3 p-3 rounded-sm border-white border"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className=" bg-gray-950 text-white w-full mt-3 mb-3 p-3 rounded-sm border-white border"
          />
          <p className="text-red-700">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
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
