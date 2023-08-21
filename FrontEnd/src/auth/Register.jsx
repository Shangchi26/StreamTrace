import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Trong phần import, đảm bảo bạn đã import useState và useEffect từ thư viện React

  const handleRegister = async () => {
    setError("");
    const registrationData = {
      FullName: fullName,
      Phone: phone,
      Email: email,
      UserName: userName,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("user", JSON.stringify(data));
        return navigate("/");
      } else {
        setError("Registration failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while processing your request.");
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    return passwordPattern.test(password);
  };

  return (
    <div className="w-full min-h-screen flex justify-center my-36">
      <div className="w-[450px] border h-fit px-8 py-5">
        <h2 className="text-center my-3 font-bold text-2xl">Register</h2>
        <div className="w-full">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full border px-3 py-1 rounded-md"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="w-full my-3">
          <label>Phone</label>
          <input
            type="number"
            placeholder="Enter Your Phone"
            className="w-full border px-3 py-1 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="w-full my-3">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border px-3 py-1 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full my-3">
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter Your User Name"
            className="w-full border px-3 py-1 rounded-md"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="w-full my-3">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full border px-3 py-1 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="w-full my-5 py-1 bg-blue-400 rounded-lg hover:bg-blue-600 duration-500 hover:text-white"
          onClick={() => {
            handleRegister();
          }}
        >
          Register
        </button>
        <label className="my-3">
          You Have An Account?{" "}
          <Link to="/login" className="font-semibold">
            Login
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Register;
