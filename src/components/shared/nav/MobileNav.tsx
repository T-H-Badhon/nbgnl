import Image from "next/image";
import React from "react";
import NavDrawer from "./NavDrawer";

const MobileNav = () => {
  return (
    <div className="fixed w-full flex justify-between items-center bg-white px-5 py-1">
      <div>
        <Image
          src={"https://nbgnl.com/wp-content/uploads/2019/10/gnl-logo.png"}
          width={50}
          height={50}
          alt="logo"
        />
      </div>
      <NavDrawer/>
    </div>
  );
};

export default MobileNav;
