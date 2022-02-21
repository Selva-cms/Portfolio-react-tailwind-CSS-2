import React from "react";

const hero = () => {
  return (
    <div className="py-20 h-auto  bg-gradient-to-br from-indigo-600 via-indigo-400 to-indigo-600">
      <div className="max-w-4xl mx-auto">
        <div className="md:flex">
          <div className="hero-left md:w-1/2 md:pt-28 md:pl-10 tracking-wide leading-loose text-center text-white">
            <h4 className="font-semibold">
              Hi, I'm <span className="text-2xl md:text-3xl">James Alan</span>
            </h4>
            <h5 className="mb-3 font-semibold">Web Designer</h5>

            <a
              href="#"
              className="bg-slate-800 py-2 px-2 rounded text-slate-200 text-sm font-semibold hover:bg-slate-900 hover:text-slate-100"
            >
              View Portfolio
            </a>
          </div>
          <div className="hero-right md:w-1/2">
            <img src="./heroImg.png" alt="hero-img" className="w-full"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
