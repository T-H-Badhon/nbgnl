"use client";

import { use, useEffect, useState } from "react";
import Navbar from "./Navbar";
import SecondNavber from "./SecondNavber";
import MobileNav from "./MobileNav";

const NavigationSection = () => {
  const [showSecondNav, setShowSecondNav] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShowSecondNav(true);
    } else {
      setShowSecondNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      <div className="hidden lg:block">
        <div >
          <SecondNavber show={showSecondNav} />
        </div>
        <div className="py-5">
          <Navbar />
        </div>
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default NavigationSection;
