import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {

  const navigate = useNavigate();
  
  const [userDropDown, setUserDropDown] = useState(false);

  

  return (
    <header className="z-50 sticky bg-white py-6 top-0 w-full grid grid-cols-2 lg:grid-cols-[250px_auto_150px] border-b">
      <div className="w-[250px] lg:order-1 flex justify-center items-center">
        <h1 className="font-extrabold text-2xl">
          <Link to="/">
            Stream
            <span className="text-orange-400 bg-black rounded">Trace</span>
          </Link>
        </h1>
      </div>
      <div className="flex order-3 lg:order-2 col-span-2 lg:col-span-1 mt-6 lg:mt-0 justify-center">
        <input
          type="search"
          placeholder="Search"
          className="lg:w-[30%] w-[70%] px-6 rounded-s-lg border outline-none"
        />
        <button className="bg-white rounded-e-lg border px-3">
          <BsSearch />
        </button>
      </div>
      {localStorage.getItem("userData") ? (
        <>
          <div className="lg:order-3 flex justify-end lg:justify-start pr-16 items-center relative cursor-pointer">
            <div onClick={() => setUserDropDown(!userDropDown)} className="relative">
              <h3 className="text-xl">{user.userName}</h3>
              <ul
                onMouseLeave={() => setUserDropDown(false)}
                className={`absolute border rounded-lg -left-5 w-[150px] ${
                  userDropDown ? "block" : "hidden"
                }`}
              >
                <li className="border-b my-1 px-3 hover:px-5 duration-500">
                  <Link to="/create">Create Channel</Link>
                </li>
                <li className="border-b my-1 px-3 hover:px-5 duration-500">
                  <Link to="/setting">Setting</Link>
                </li>
                <li className="my-1 px-3 hover:px-5 duration-500">
                  <Link onClick={logOut} to="/login">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <ul className="lg:order-3 flex justify-around items-center relative cursor-pointer">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </>
      )}
    </header>
  );
};

export default Header;
