import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="bg-white p-2 flex justify-between items-center w-full rounded-xl">
      <input
        className="bg-gray-100 p-2 rounded-md w-1/2"
        type="text"
        placeholder="Search"
      />
      <div className="flex gap-4">
        <button className=" w-10 h-10 bg-gray-200 rounded-md flex justify-center items-center">
          <AiOutlineMail size={20} />
        </button>
        <button className=" w-10 h-10 bg-gray-200 rounded-md flex justify-center items-center">
          <AiOutlineBell size={20} />
        </button>
        <div className="flex items-center gap-2 border-l-2 px-2 border-slate-200">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="text-xs bg-green-300 rounded-md w-fit p-[3px]">
              Admin
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
