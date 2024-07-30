import Image from "next/image";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import NavMenu from "./NavMenu";

const SecondNavber = ( {show}:{show:boolean}) => {
    return (
      <div className={` ${show? "-translate-y-0 transition-transform duration-500": "-translate-y-24 transition-transform duration-500"} fixed w-[calc(100%-64px)] flex justify-between items-center bg-white mx-8  px-8 rounded-b-2xl `}>
        <div className="pt-2">
          <Image
            src={"https://nbgnl.com/wp-content/uploads/2019/10/gnl-logo.png"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="py-2">
          <NavMenu />
        </div>
        <div className="flex items-center space-x-5 py-2">
          <div>
            <HiMagnifyingGlass className=" text-2xl" />
          </div>
          <div className="p-[2px] bg-gradient-to-r from-blue-800 to-red-600 rounded-s-full rounded-e-full">
            <div className="py-4 px-10 bg-white hover:bg-gradient-to-r from-blue-800 to-red-600 text-base hover:text-white  rounded-s-full rounded-e-full">
              Get in touch
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SecondNavber;