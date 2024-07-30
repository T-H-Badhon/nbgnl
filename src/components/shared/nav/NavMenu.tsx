import React from "react";
import { productList } from "./constant";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";

const NavMenu = () => {
  return (
    <div className="flex space-x-3 items-center">
      <Link
        href={"/"}
        className="group h-8 overflow-hidden text-base hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full"
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Home
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Home
        </h1>
      </Link>
      <Link
        href={"/about"}
        className="group h-8 overflow-hidden text-base hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full"
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          About Us
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          About Us
        </h1>
      </Link>
      <div className="relative group">
        <Link
          href={"/products"}
          className="h-8 overflow-hidden text-base flex items-baseline group-hover:bg-secondaryHover space-x-2 py-1 px-4 rounded-s-full rounded-e-full"
        >
          <div>
            <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
              Products
            </h1>
            <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
              Products
            </h1>
          </div>
          <HiPlay className="relative top-[2px] rotate-45 w-2 h-2  " />
        </Link>

        <div className="hidden group-hover:flex h-0 group-hover:h-fit absolute left-1/2 z-10   w-screen max-w-max -translate-x-1/2 px-4 transition-all ease-in-out delay-1000 duration-1000">
          <div className="w-[250px] flex-auto overflow-hidden rounded-3xl mt-4 bg-black text-white text-base leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-8 flex flex-col space-y-4 ">
              {productList.map((product) => {
                
                return(
                  <Link
                    key={product.name}
                    href="#"
                    className="group/inner flex items-center hover:text-red-400 transition duration-300"
                  >
                    <HiPlay className="hidden group-hover/inner:block relative top-[5px] rotate-45 w-2 h-2" />
                    <h1 className="transition-transform  duration-500 group-hover/inner:translate-x-3">{product.name}</h1>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"/events"}
        className="group h-8 overflow-hidden text-base hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full "
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Events
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Events
        </h1>
      </Link>
      <div className="group h-8 overflow-hidden text-base hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full ">
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Catalog
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Catalog
        </h1>
      </div>
      <Link
        href={"/contact"}
        className="group h-8 overflow-hidden text-base hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full "
      >
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Contact Us
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Contact Us
        </h1>
      </Link>
    </div>
  );
};

export default NavMenu;
