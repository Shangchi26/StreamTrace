import React from "react";
import avatar from "../assets/noneAvt.png";
import Thumbnail from "../assets/thumbnail.png";

const Channel = () => {
  return (
    <section className="min-h-screen">
      <div className="w-full flex justify-center items-center flex-col h-[400px] border-b">
        <img
          src={avatar}
          alt=""
          className="h-[300px] object-cover rounded-full"
        />
        <h3 className="font-bold text-xl mt-5">Coder 2 Ngon Channel</h3>
      </div>
      <div className="w-full p-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
          <li className="w-[300px]">
            <img src={Thumbnail} alt="" />
            <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              modi.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Channel;
