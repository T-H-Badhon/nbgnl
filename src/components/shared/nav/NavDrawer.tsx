"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import {
  HiBars3BottomRight,
  HiMagnifyingGlass,
  HiPlay,
  HiXMark,
} from "react-icons/hi2";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { productList } from "./constant";

const NavDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <button onClick={toggleDrawer}>
        <HiBars3BottomRight className="w-8 h-8" />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="py-4 px-8">
          <div className="flex space-x-2 items-center justify-end">
            <HiMagnifyingGlass className=" text-2xl" />
            <button onClick={toggleDrawer}>
              <HiXMark className=" text-2xl" />
            </button>
          </div>
          <div className="my-8 space-y-3">
            <div onClick={toggleDrawer} className="w-full text-lg">
              <Link href={"/"}>Home</Link>
            </div>
            <div className="w-full text-lg">
              <Link href={"/about"}>About Us</Link>
            </div>
            <div>
              <Disclosure as="div" className="w-full max-w-md">
                <DisclosureButton className="w-full text-left">
                  <button className="w-full text-start text-lg focus:text-red-600">Products</button>
                </DisclosureButton>
                <div className="overflow-hidden">
                  <DisclosurePanel
                    transition
                    className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                  >
                    <div className="px-3 space-y-2">
                      <Link
                        href="#"
                        className="group/inner flex items-center hover:text-red-400 transition duration-300"
                      >
                        <HiPlay className="hidden group-hover/inner:block relative top-[5px] rotate-45 w-2 h-2" />
                        <h1 className="transition-transform  duration-500 group-hover/inner:translate-x-3">
                          All products
                        </h1>
                      </Link>
                      {productList.map((product) => {
                        return (
                          <Link
                            key={product.name}
                            href="#"
                            className="group/inner flex items-center hover:text-red-400 transition duration-300"
                          >
                            <HiPlay className="hidden group-hover/inner:block relative top-[5px] rotate-45 w-2 h-2" />
                            <h1 className="transition-transform  duration-500 group-hover/inner:translate-x-3">
                              {product.name}
                            </h1>
                          </Link>
                        );
                      })}
                    </div>
                  </DisclosurePanel>
                </div>
              </Disclosure>
            </div>
            <div onClick={toggleDrawer} className="w-full text-lg">
              <Link href={"/events"}>Events</Link>
            </div>
            <div className="w-full text-lg">Catalog</div>
            <div onClick={toggleDrawer} className="w-full text-lg">
              <Link href={"/contact"}>Contact Us</Link>
            </div>
          </div>
          <hr />
          <div className="my-5 space-y-3">
            <h1 className="text-gray-400">Contacts</h1>
            <h1>86-057455681351</h1>
            <h1 className="underline">info@nbgnl.com</h1>
          </div>
          <div className="my-3 flex space-x-3">
            <h1 onClick={toggleDrawer} className="text-xl">
              <Link href={"https://www.facebook.com/GNLelevator/"}>
                <FaFacebook />
              </Link>
            </h1>
            <h1 onClick={toggleDrawer} className="text-xl">
              <Link href={"https://www.linkedin.com/in/max-sagor-649bb588"}>
                <FaLinkedinIn />
              </Link>
            </h1>
            <h1 onClick={toggleDrawer} className="text-xl">
              <Link href={"https://www.instagram.com/gnl_elevator_parts"}>
                <FaInstagram />
              </Link>
            </h1>
          </div>
          <div className="p-[2px] bg-gradient-to-r from-blue-800 to-red-600 rounded-s-full rounded-e-full">
            <div className="py-4 px-10 bg-white hover:bg-gradient-to-r from-blue-800 to-red-600 text-base hover:text-white  rounded-s-full rounded-e-full">
              Get in touch
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
