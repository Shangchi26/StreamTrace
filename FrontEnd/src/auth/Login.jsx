import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          UserName: userName,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("user", JSON.stringify(data));
        navigate('/')
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred");
    }
  };

  return (
    <>
      <section className="w-full min-h-screen flex justify-center my-36">
        <div className="w-[450px] h-fit border p-5">
          <h2 className="text-center font-bold text-3xl">Login</h2>
          <div className="mt-5 w-full">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter Your User Name..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
          {error && <p>{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full my-5 py-1 bg-blue-400 rounded-lg hover:bg-blue-600 duration-500 hover:text-white"
          >
            Log In
          </button>
          <label>
            You don't have an account?{" "}
            <span>
              <Link to="/register" className="font-semibold">
                Register
              </Link>
            </span>
          </label>
        </div>
      </section>
    </>
  );
};

export default Login;
