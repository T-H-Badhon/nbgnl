import React from "react";
import { productList } from "./constant";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";

const NavMenu = () => {
  return (
    <div className="flex space-x-3 items-center">
      <div className="group hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full h-8 overflow-hidden">
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Home
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Home
        </h1>
      </div>
      <div className="group hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full h-8 overflow-hidden">
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          About Us
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          About Us
        </h1>
      </div>
      <div className="relative group">
        <div className="group-hover:bg-secondaryHover flex items-baseline space-x-2 py-1 px-4 rounded-s-full rounded-e-full h-8 overflow-hidden">
          <div>
            <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
              Products
            </h1>
            <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
              Products
            </h1>
          </div>
          <HiPlay className="relative top-[2px] rotate-45 w-2 h-2 "/>
        </div>

        <div className="hidden absolute left-1/2 z-10 group-hover:flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
          <div className="w-[250px] flex-auto overflow-hidden rounded-3xl mt-4 bg-black text-white text-base leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-8 flex flex-col space-y-4 ">
              {productList.map((product) => (
                <Link key={product.name} href="#" className="hover:text-red-400">
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="group hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full h-8 overflow-hidden">
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Events
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Events
        </h1>
      </div>
      <div className="group hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full h-8 overflow-hidden">
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Catalog
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Catalog
        </h1>
      </div>
      <div className="group hover:bg-secondaryHover py-1 px-4 rounded-s-full rounded-e-full h-8 overflow-hidden">
        <h1 className="group-hover:-translate-y-8 transition-transform duration-300">
          Contact Us
        </h1>
        <h1 className="group-hover:-translate-y-6 transition-transform duration-300">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default NavMenu;
