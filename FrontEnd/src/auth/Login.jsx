import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  

  return (
    <>
      <section className="w-full min-h-screen flex justify-center my-36">
        <div className="w-[450px] h-fit border p-5">
          <h2 className="text-center font-bold text-3xl">Login</h2>
          <div className="mt-5 w-full">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-1 rounded-md"
            />
          </div>
          <div className="mt-5 w-full">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-1 rounded-md"
            />
          </div>
          <div className="mt-5 w-full flex justify-start">
            <input type="checkbox" className="mr-3" />
            <p>Remember your account</p>
          </div>
          <div className="mt-5 w-full flex justify-start"></div>
          <button className="w-full my-5 py-1 bg-blue-400 rounded-lg hover:bg-blue-600 duration-500 hover:text-white">
            Log In
          </button>
          <label>
            You don't have an account?{" "}
            <span>
              <Link to="/register" className="font-semibold">Register</Link>
            </span>
          </label>
        </div>
      </section>
    </>
  );
};

export default Login;
