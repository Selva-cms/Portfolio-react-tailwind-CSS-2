import React from "react";

const nav = () => {
  return (
    <div className="nav bg-indigo-600 w-full shadow-2xl">
      <div className="flex justify-between max-w-4xl md:mx-auto py-4 h-auto items-center mx-2">
        <div className="nav-left">
            <img src="./logo.png" alt="Logo" className="w-10"></img>
        </div>
        <div className="nav-right">
            <a href="#" className="text-xs font-bold tracking-wide px-3 hover:bg-gray-900 py-2 rounded hover:text-slate-300">HOME</a>
            <a href="#" className="text-xs font-bold tracking-wide px-3 hover:bg-gray-900 py-2 rounded hover:text-slate-300">ABOUT</a>
            <a href="#" className="text-xs font-bold tracking-wide px-3 hover:bg-gray-900 py-2 rounded hover:text-slate-300">PROJECTS</a>
            <a href="#" className="text-xs font-bold tracking-wide px-3 hover:bg-gray-900 py-2 rounded hover:text-slate-300">SKILLS</a>
            <a href="#" className="text-xs font-bold bg-slate-900 py-2 ml-1 rounded text-slate-300 px-3 hover:bg-slate-800 hover:text-slate-200">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default nav;
