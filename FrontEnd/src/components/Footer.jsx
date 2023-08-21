import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiTwotoneMail,
  AiFillPhone,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebook, FaAddressCard } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="px-5 pt-10 flex flex-col items-center bg-orange-300">
        <div className="w-full flex justify-around gap-20">
          <div className="max-w-[50%]">
            <h3 className="font-bold">About Company</h3>
            <p className="mt-5">
              Streaming services have become increasingly popular and have
              transformed the way we consume media. Streaming is an immediate
              and continuous method of accessing content from the Internet. It
              has become the predominant way for people to experience music and
              videos.
            </p>
            <Link>You have some question? Please contact us!</Link>
          </div>
          <div className="">
            <h3 className="font-bold">Contact</h3>
            <ul className="mt-5">
              <li className="flex items-center">
                <FaAddressCard size={20} className="mr-3" /> 8A, Ton That
                Thuyet, My Dinh 2, HaNoi
              </li>
              <li className="flex items-center">
                <AiTwotoneMail size={20} className="mr-3" />
                sangtvth2207070@fpt.edu.vn
              </li>
              <li className="flex items-center">
                <AiFillPhone size={20} className="mr-3" />
                +84 559 532 643
              </li>
            </ul>
            <ul className="flex mt-5">
              <li className="mx-5">
                <AiFillGithub size={30} className="w-full h-full" />
              </li>
              <li className="mx-5">
                <FaFacebook size={30} className="w-full h-full" />
              </li>
              <li className="mx-5">
                <AiFillGoogleCircle size={30} className="w-full h-full" />
              </li>
              <li className="mx-5">
                <AiFillTwitterCircle size={30} className="w-full h-full" />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-5 p-3 border-t">
          <h3 className="text-center">&copy; Copyright: Coder2Ngón</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
