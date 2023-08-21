import React from 'react'
import Thumbnail from "../assets/thumbnail.png";

const WishList = () => {
  return (
    <section className="w-full min-h-screen">
      <h2 className="text-center text-4xl m-10">Your Wish List</h2>
      <div className="w-full p-20">
        <ul className="grid grid-cols-1 gap-5">
          <li className="flex gap-5">
            <img src={Thumbnail} alt="" className="w-[300px]" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          <li className="flex gap-5">
            <img src={Thumbnail} alt="" className="w-[300px]" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          <li className="flex gap-5">
            <img src={Thumbnail} alt="" className="w-[300px]" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          <li className="flex gap-5">
            <img src={Thumbnail} alt="" className="w-[300px]" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          <li className="flex gap-5">
            <img src={Thumbnail} alt="" className="w-[300px]" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          <li className="flex gap-5">
            <img src={Thumbnail} alt="" className="w-[300px]" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WishList