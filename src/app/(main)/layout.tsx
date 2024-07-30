import NavigationSection from "@/components/shared/nav/NavigationSection";
import React from "react";

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div><NavigationSection/></div>
      <div className="pt-14 lg:pt-0 mx-5 lg:mx-[60px]">{children}</div>
    </div>
  );
};

export default Mainlayout;
