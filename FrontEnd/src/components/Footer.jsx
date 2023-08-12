import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="px-40 pt-10">
        <div className="w-full grid grid-cols-2 gap-20">
          <div>
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
              <li>8A, Ton That Thuyet, My Dinh 2, HaNoi</li>
              <li>sangtvth2207070@fpt.edu.vn</li>
              <li>+84 559 532 643</li>
            </ul>
            <ul className="flex mt-5">
              <li className="w-8 h-8 bg-black rounded-full mx-5"></li>
              <li className="w-8 h-8 bg-black rounded-full mx-5"></li>
              <li className="w-8 h-8 bg-black rounded-full mx-5"></li>
              <li className="w-8 h-8 bg-black rounded-full mx-5"></li>
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
