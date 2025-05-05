import React from "react";
import stockLogo from "../assets/stocknp.png";
import { PhoneCall } from "lucide-react";
import { LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" fixed w-full  bg-white top-7 shadow-sm ">
      <div className=" w-11/12 mx-auto flex justify-between  items-center py-2 ">
        <div>
          <img
            src={stockLogo}
            alt="stocknp logo"
            height={130}
            width={130}
            className="cursor-pointer"
          />
        </div>

        <div className="flex justify-between items-center space-x-6">
          <p className="text-violet-600 text-[17px]  cursor-pointer hover:opacity-80">
            Home
          </p>
          <p className="text-violet-600 text-[17px]  cursor-pointer hover:opacity-80">
            Features
          </p>
          <p className="text-violet-600 text-[17px]  cursor-pointer hover:opacity-80">
            Testimonial
          </p>
          <p className="text-violet-600 text-[17px]  cursor-pointer hover:opacity-80">
            Pricing
          </p>
          <p className="text-violet-600 text-[17px]  cursor-pointer hover:opacity-80">
            Contact
          </p>
          <button className="bg-orange-100 text-[12px] text-orange-400 py-2 px-5 rounded-3xl font-medium cursor-pointer">
            Try Demo
          </button>
        </div>

        <div className="flex justify-between items-center space-x-4">
          <button className="flex items-center bg-violet-600 gap-2 text-white font-semibold text-sm py-2 px-3.5 rounded-lg cursor-pointer hover:opacity-85">
            {" "}
            <LogIn size={18} />
            Login
          </button>
          <button className="flex items-center bg-white  gap-2 text-violet-600 font-semibold text-sm py-2 px-3.5 border-2 border-gray-100 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-black">
            {" "}
            <PhoneCall size={18} /> Call Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
