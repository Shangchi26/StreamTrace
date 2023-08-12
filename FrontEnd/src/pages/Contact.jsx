import React from "react";
import C2N from "../assets/C2N.png";

const Contact = () => {
  return (
    <>
      <section className="w-full">
        <div className="w-full h-[700px] relative">
          <img src={C2N} alt="" className="w-full h-full object-cover" />
          <h2 className="absolute top-[20%] left-[40%] translate-x-[-40%] font-extrabold text-7xl ">
            Coder2Ngón
          </h2>
        </div>
        <div className="grid grid-cols-2 m-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096949073307!2d105.77971427605463!3d21.02880648777546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56573e7f9a11!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1691593681809!5m2!1svi!2s"
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
          <div className="w-full border px-10 py-5">
            <h3 className="text-center font-bold text-3xl">Contact Us</h3>
            <div className="mt-5">
              <label className="font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border outline-slate-300 px-3 py-1 rounded-lg"
              />
            </div>
            <div className="mt-5">
              <label className="font-semibold">
                Your Email or Phone number
              </label>
              <input
                type="text"
                placeholder="Enter your Email or Phone number"
                className="w-full border outline-slate-300 px-3 py-1 rounded-lg"
              />
            </div>
            <div className="mt-5">
              <label className="font-semibold">
                Your Email or Phone number
              </label>
              <textarea
                className="w-full border outline-slate-300 px-3 py-1 rounded-lg"
                rows={4}
              />
            </div>
            <button className="border px-6 py-1 mt-5 bg-orange-400 text-white font-semibold rounded-md">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
