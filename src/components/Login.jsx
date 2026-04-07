import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="pt-20 bg-red-950 min-h-screen border-amber-500 border-2 flex justify-center items-center">
        <form className="flex flex-col w-4/12">
          <h1 className=" text-white text-3xl font-bold">
            Enter your info to sign in
          </h1>
          <h2 className="text-xl text-blue-50 mt-3 mb-3">
            Or get started with a new account.
          </h2>
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-950 text-white w-full mt-3 mb-3 p-3 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className=" bg-gray-950 text-white w-full mt-3 mb-3 p-3 rounded-sm"
          />
          <button className="bg-red-700 text-white font-bold w-full p-3 mt-3 rounded-sm">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
