import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"
import { RiContactsFill } from "react-icons/ri"
import { HiSwitchHorizontal } from "react-icons/hi"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SideBar = () => {
  
  const [sideBarState, setSideBarState] = useState(1)
  const [sideBar, setSideBar] = useState(true)
  const navigate = useNavigate()

  const switchToAdmin = () => {
    setSideBarState(2);
    navigate("/admin");
  };
  const switchToUser = () => {
    setSideBarState(1)
    navigate("/")
  }

  useEffect(() => {
    // Hàm này sẽ được gọi khi component được render và sau mỗi lần cập nhật trạng thái.
    const handleResize = () => {
      const isWideScreen = window.innerWidth > 1024;
      setSideBar(isWideScreen);
    };

    // Đăng ký sự kiện lắng nghe thay đổi kích thước cửa sổ.
    window.addEventListener("resize", handleResize);

    // Gọi hàm handleResize lần đầu để thiết lập trạng thái ban đầu.
    handleResize();

    // Hủy đăng ký sự kiện khi component bị hủy bỏ.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <section
        className={`min-h-screen w-[260px] absolute lg:relative border-r bg-white z-10 duration-500 ${
          sideBar ? "left-0" : "-left-[260px]"
        }`}
      >
        <button
          onClick={() => setSideBar(!sideBar)}
          className={`absolute lg:hidden -right-10 p-2 top-10 bg-orange-500 rounded-e`}
        >
          {" "}
          {sideBar ? (
            <FaAngleLeft size={25} />
          ) : (
            <FaAngleRight size={25} />
          )}{" "}
        </button>
        
          <div className="w-full flex justify-around items-center px-10">
            <p
              onClick={switchToAdmin}
              className="cursor-pointer hover:underline"
            >
              Admin
            </p>
            <span>
              <HiSwitchHorizontal />
            </span>
            <p
              onClick={switchToUser}
              className="cursor-pointer hover:underline"
            >
              User
            </p>
          </div>
        
        {sideBarState === 1 && (
          <>
            {" "}
            <div className="w-full py-2 px-5">
              <ul>
                <li className="font-semibold my-2 relative">
                  <Link to="/">
                    <AiFillHome size={23} />
                    <span className="absolute top-0 left-8"> Home</span>
                  </Link>
                </li>
                <li className="font-semibold my-2 relative">
                  <Link to="/contact">
                    <RiContactsFill size={24} />{" "}
                    <span className="absolute top-0 left-8">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full border-t py-2 px-5">
              <label className="font-semibold">Manager</label>
              <ul className="ml-5">
                <li className="my-2">
                  <Link to="/serviceManager">Your Service</Link>
                </li>
                <li className="my-2">
                  <Link to="/subPackage">Your Subscription package</Link>
                </li>
              </ul>
            </div>
            <div className="w-full border-t py-2 px-5">
              <label className="font-semibold">Subscriptions</label>
              <ul className="ml-5">
                <li className="my-2">Channel 1</li>
                <li className="my-2">Channel 2</li>
                <li className="my-2">Channel 3</li>
              </ul>
            </div>
            <div className="w-full border-t py-2 px-5">
              <ul>
                <li className="my-2 font-semibold">Favories List</li>
                <li className="my-2 font-semibold">Wish List</li>
              </ul>
            </div>
            <div className="w-full border-t py-2 px-5">
              <label className="font-semibold">Explore</label>
              <ul className="ml-5">
                <li className="my-2">Trending</li>
                <li className="my-2">Music</li>
                <li className="my-2">LiveStream</li>
              </ul>
            </div>
          </>
        )}
        {sideBarState === 2 && (
          <>
            <h2 className="text-center font-bold text-2xl mt-10">
              Admin: name
            </h2>
            <div className="min-h-[300px] px-5 flex flex-col justify-center">
              <h3 className="font-semibold">Manager</h3>
              <ul className="ml-5">
                <li className="my-2 hover:ml-3 cursor-pointer duration-500">
                  <Link to="/admin/">DashBoard</Link>
                </li>
                <li className="my-2 hover:ml-3 cursor-pointer duration-500">
                  <Link to="/admin/collaborators">Add Collaborators</Link>
                </li>
                <li className="my-2 hover:ml-3 cursor-pointer duration-500">
                  <Link to="/admin/adminManager">Admin Manager</Link>
                </li>
                <li className="my-2 hover:ml-3 cursor-pointer duration-500">
                  <Link to="/admin/userManager">User Manager</Link>
                </li>
                <li className="my-2 hover:ml-3 cursor-pointer duration-500">
                  <Link to="/admin/provider">Service Provider Manager</Link>
                </li>
                <li className="my-2 hover:ml-3 cursor-pointer duration-500">
                  <Link to="/admin/serviceManager">Service Manager</Link>
                </li>
                <li className="my-2 hover:ml-3 cursor-pointer duration-500">
                  <Link to="/admin/feedbackManager">FeedBack Manager</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default SideBar;
