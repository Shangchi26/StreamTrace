import React from "react";
import avatar from "../assets/noneAvt.png";
import { MdClose } from "react-icons/md";

const Setting = () => {
  return (
    <>
      <section className="m-20 flex flex-col items-center">
        <div className="border-b w-full text-center py-5">
          <h3 className="font-bold text-xl">My Profile</h3>
          <p>Manage and protect your account</p>
        </div>
        <div className="relative w-full grid grid-cols-[300px_auto]">
          <div className="flex min-h-[300px] flex-col items-center justify-center border-r">
            <div className="relative group">
              <div className="z-10 absolute top-0 left-0 w-full h-full rounded-full duration-300 group-hover:bg-black/25">
                <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-red-500 hidden group-hover:block">
                  <MdClose size={30} />
                </button>
              </div>
              <img
                src={avatar}
                alt="name"
                className="z-0 w-[100px] object-cover rounded-full"
              />
            </div>
            <p className="text-center font-semibold">User.name</p>
            <p className="text-center">User.email</p>
          </div>
          <div className="w-full flex justify-center">
            <table className="mt-10">
              <tbody>
                <tr>
                  <td className="text-end pr-16">User Name</td>
                  <td>
                    <input type="text" placeholder="user.userName" />
                  </td>
                </tr>
                <tr>
                  <td className="text-end pr-16">Avatar</td>
                  <td>
                    <input type="file" accept="image/png" />
                  </td>
                </tr>
                <tr>
                  <td className="text-end pr-16">Email</td>
                  <td>
                    <input type="text" placeholder="user.email" />
                  </td>
                </tr>
                <tr>
                  <td className="text-end pr-16">Phone Number</td>
                  <td>
                    <input type="number" placeholder="user.phone" />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <button className="px-6 py-1 bg-orange-400 rounded-md hover:bg-orange-500 hover:text-white duration-500">
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
