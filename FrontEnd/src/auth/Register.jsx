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

  const handleRegister = async () => {
    if (!fullName || !phone || !email || !userName || !password) {
      setError('Please fill out all fields.');
    } else if (!validateEmail(email)) {
      setError("Invalid email format");
    } else if (!validatePassword(password)) {
      setError(
        "Password must contain at least one digit and one uppercase letter, and be at least 6 characters long"
      );
    } else {
      setError("");
      // Gửi dữ liệu đăng ký đến API
      // const registrationData = {
      //   FullName: fullName,
      //   Phone: phone,
      //   Email: email,
      //   UserName: userName,
      //   password: password,
      // };

      // try {
      //   const response = await fetch("http://localhost:8000/api/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //     body: JSON.stringify(registrationData),
      //   });

      //   if (response.ok) {
      //     // Xóa dữ liệu đăng ký khỏi session
      //     sessionStorage.removeItem("registrationData");

      //     // Chuyển hướng sau khi đăng ký thành công
      //     navigate("/");
      //   } else {
      //     const data = await response.json();
      //     console.log("Registration failed:", data);
      //   }
      // } catch (error) {
      //   console.error("Error:", error);
      // }
    }
  };

  // Lưu tạm thời dữ liệu đăng ký vào session
  const saveDataToSession = () => {
    const registrationData = {
      FullName: fullName,
      Phone: phone,
      Email: email,
      UserName: userName,
      password: password,
    };

    sessionStorage.setItem(
      "registrationData",
      JSON.stringify(registrationData)
    );
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
            saveDataToSession();
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
