import React from "react";
import stockImg from "../assets/stocknp.png";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import payImg from "../assets/weaccept.png"
import { Zap } from 'lucide-react';


export default function Footer() {
  return (
    <div className="mt-10 bg-violet-600 pt-10 ">
      <div className="w-11/12 mx-auto grid grid-cols-5  items-start border-b border-violet-700 py-10 pb-15 ">

        <div className=" space-y-4 ml-2">

          <p className="bg-white py-1.5 px-8 w-48 rounded-lg cursor-pointer">           
            <img src={stockImg} alt="" height={130} width={130} />{" "}
          </p>

          <p className="text-white text-[15px] opacity-90 ">
            Take full control of your inventory, billing, and POS  without the
            hassle. Our system helps you track stock  in real-time, automate
            orders, and avoid mistakes, making your business faster, smarter,
            and more efficient.
          </p>

          <p className="text-[16px] font-medium text-white flex gap-1.5 items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
              />
            </svg>
            Free Consultation
          </p>

          <p className="text-[17px] font-medium text-white flex gap-1.5 items-center cursor-pointer">
          <HandCoins size={18}/>
          We accept
          </p>

         <p className=""><img src={payImg} alt=""  className="h-15 w-94 rounded-lg "/></p>

        </div>

        <div className=" text-white space-y-4 ml-6">
          <h1 className="font-semibold mb-6">Quick Links</h1>

          <p className=" cursor-pointer flex group items-center text-sm font-medium opacity-85">
            {" "}
            Home{" "}
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 scale-"
            />{" "}
          </p>

          <p className="cursor-pointer flex group items-center text-sm font-medium opacity-85">
            {" "}
            Features{" "}
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 scale-"
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Testimonials{" "}
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Contact{" "}
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Pricing{" "}
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Try Demo{" "}
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>
        </div>

        <div className="text-white space-y-4">
          <h1 className="font-semibold mb-6">Other Products</h1>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
           
            Restronp
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Zylux IT Solution
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Fenzora
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          
        </div>

        <div className="text-white space-y-4">
          <h1 className="font-semibold mb-6">Socials</h1>

          <p className="flex group items-center text-sm font-medium opacity-85 gap-1.5 cursor-pointer">
          <Facebook size={17}/>
            Facebook
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 gap-1.5 cursor-pointer">
          <Instagram size={17}/>
            Instagram
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 gap-1.5 cursor-pointer">
          <Twitter size={17}/>
            Twitter
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 gap-1.5 cursor-pointer">
          <Linkedin size={17}/>
            LinkedIn
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          
        </div>

        <div className="text-white space-y-4">
          <h1 className="font-semibold mb-6">Legal</h1>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Privacy Policy
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Terms of Service
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Cookies Policy

            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Terms of Use
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

          <p className="flex group items-center text-sm font-medium opacity-85 cursor-pointer">
            {" "}
            Refund Policy
            <ArrowUpRight
              size={15}
              className="block group-hover:hidden mt-1.5 ml-1"
            />{" "}
            <ArrowRight
              size={15}
              className="mt-1.5 ml-2 hidden group-hover:block duration-500 "
            />{" "}
          </p>

         
        </div>
        
        
      </div>
          
          <div className=" text-white flex justify-between w-11/12 mx-auto pt-10 pb-4">
            <p className="text-[12.5px] font-medium opacity-80">© 2025 stocknp. All rights reserved.</p>
            <p className="flex items-center gap-1 text-[13.5px] font-medium opacity-80">   <Zap size={16}/> Powered by
            Zylux IT Solution</p>
          </div>

    </div>
  );
}
