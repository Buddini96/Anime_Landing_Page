"use client";
import { navLinks } from "@/app/constant/Constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav:()=>void
}

const Nav = ({openNav}: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`fixed ${navBg ? 'bg-white/80 shadow-md': 'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <h1 className="text-xl md:text-2xl font-extrabold">
          Ani
          <span className="text-xl md:text-2xl text-[#E93306] font-extrabold">
            Flix
          </span>
        </h1>
        {/* nav links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav_links">{link.label}</p>
            </Link>
          ))}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-gradient-to-r from-[#E93306] via-[#E93306] via-[#FF5733] to-[#FFA500] hover:from-[#FF5733] hover:via-[#FFA500] hover:to-[#FFD700] transition-all duration-200 rounded-full">
            Join Now
          </button>
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-black lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
