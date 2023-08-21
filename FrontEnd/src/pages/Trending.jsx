import React from 'react'
import Thumbnail from "../assets/thumbnail.png";

const Trending = () => {
  return (
    <section className="w-full min-h-screen">
      <h2 className="text-center text-4xl m-10">Trending</h2>
      <div className="w-full p-20">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <li className="w-full">
            <img src={Thumbnail} alt="" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          
          <li className="w-full">
            <img src={Thumbnail} alt="" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          
          <li className="w-full">
            <img src={Thumbnail} alt="" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          
          <li className="w-full">
            <img src={Thumbnail} alt="" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          
          <li className="w-full">
            <img src={Thumbnail} alt="" />
            <div>
              <h3 className="font-semibold text-xl mt-3">Coder2Ngon Channel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                modi.
              </p>
            </div>
          </li>
          
          <li className="w-full">
            <img src={Thumbnail} alt="" />
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

export default Trending