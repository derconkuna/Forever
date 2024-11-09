import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className=" border-t w-full ">
      <div className=" flex flex-col items-center my-24 w-full sm:w-2/6 mx-auto ">
        <div className=" flex gap-2 items-center">
          <p className=" font-serif text-3xl text-black ">{currentState}</p>
          <p className=" border-2 border-gray-700 w-12 "></p>
        </div>

        <form onSubmit={handleSubmit} className=" pt-5 w-full  ">
          {currentState == "Sign up" ? (
            <input
              required
              type="text"
              placeholder="Name"
              className=" border border-gray-900 outline-none my-3 w-full text-base px-7 py-2"
            />
          ) : (
            ""
          )}

          <input
            required
            type="text"
            placeholder="Email"
            className=" border border-gray-900 outline-none w-full text-base px-7 py-2"
          />
          <br />
          <input
            required
            type="password"
            placeholder="Password"
            className=" border border-gray-900 outline-none my-3 w-full text-base px-7 py-2"
          />

          <div className=" flex items-center justify-between w-full">
            <p className=" text-sm text-slate-950 text-start">
              Forgort your password?
            </p>
            {currentState == "Login" ? (
              <p
                onClick={() => setCurrentState("Sign up")}
                className=" cursor-pointer"
              >
                Sign up
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className=" cursor-pointer"
              >
                Login
              </p>
            )}
          </div>

          <div className=" w-full text-center">
            <button className=" bg-black text-white px-7 py-2 my-10 mx-auto">
              {currentState}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
