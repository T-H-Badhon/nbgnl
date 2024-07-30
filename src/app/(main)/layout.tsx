import Navbar from "@/components/shared/nav/Navbar";
import React from "react";

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div><Navbar/></div>
      <div>{children}</div>
    </div>
  );
};

export default Mainlayout;
