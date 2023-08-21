import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { GiConfirmed } from "react-icons/gi"

const SubscriptionPackage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/packages");
        const data = await response.json();

        if (data) {
          sessionStorage.setItem("allPackages", JSON.stringify(data));
          console.log(
            "Packages data fetched and stored in sessionStorage:",
            data
          );
        }
      } catch (error) {
        console.error("Error fetching packages data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchPackage = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/packages/${id}`);
      const data = await response.json();

      if (data) {
        sessionStorage.setItem("packageData", JSON.stringify(data));
        console.log("Package data fetched and stored in sessionStorage:", data);
        navigate('/payment')
      }
    } catch (error) {
      console.error("Error fetching package data:", error);
    }
  };
  return (
    <div className="m-20">
      <h2 className="text-center text-4xl">Select Subsciption Package</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-20">
        <div className="relative order-3 lg:order-1 flex items-end justify-center lg:mt-36 rounded-2xl h-[420px] bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 overflow-hidden">
          <div className="absolute flex justify-center items-center -top-[80px] -left-[20%] w-[140%] h-[250px] rounded-b-full  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
            <h3 className="text-5xl uppercase">Silver</h3>
          </div>

          <div className="m-10 font-semibold ">
            <p className="text-xl">$29</p>
            <span>25 times to upload your service</span>
            <ul className="mx-5">
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">Video</p>
              </li>
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">Music</p>
              </li>
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">LiveStream</p>
              </li>
            </ul>
            <button
              onClick={() => fetchPackage(1)}
              className="w-full bg-blue-400 py-1 mt-3 rounded-md hover:bg-blue-500 hover:text-white duration-500"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="relative order-1 lg:order-2 flex items-end justify-center rounded-2xl h-[420px] bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 overflow-hidden">
          <div className="absolute flex justify-center items-center -top-[80px] -left-[20%] w-[140%] h-[250px] rounded-b-full  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-500 via-blue-100 to-blue-500">
            <h3 className="text-5xl uppercase">Diamond</h3>
          </div>
          <div className="m-10 font-semibold ">
            <p className="text-xl">$59</p>
            <span>60 times to upload your service</span>
            <ul className="mx-5">
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">Video</p>
              </li>
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">Music</p>
              </li>
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">LiveStream</p>
              </li>
            </ul>
            <button
              onClick={() => fetchPackage(2)}
              className="w-full bg-blue-400 py-1 mt-3 rounded-md hover:bg-blue-500 hover:text-white duration-500"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="relative order-2 lg:order-3 flex items-end justify-center lg:mt-36 rounded-2xl h-[420px] bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 overflow-hidden">
          <div className="absolute flex justify-center items-center -top-[80px] -left-[20%] w-[140%] h-[250px] rounded-b-full  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-100 to-yellow-500">
            <h3 className="text-5xl uppercase">Gold Package</h3>
          </div>
          <div className="m-10 font-semibold ">
            <p className="text-xl">$99</p>
            <span>100 times to upload your service</span>
            <ul className="mx-5">
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">Video</p>
              </li>
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">Music</p>
              </li>
              <li className="relative flex items-center">
                <GiConfirmed size={20} />
                <p className="ml-2">LiveStream</p>
              </li>
            </ul>
            <button
              onClick={() => fetchPackage(3)}
              className="w-full bg-blue-400 py-1 mt-3 rounded-md hover:bg-blue-500 hover:text-white duration-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPackage;
