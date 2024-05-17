import React from "react";
import BrandLogo from "../../assets/images/brandlogo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 mx-auto  h-14 ">
      <img src={BrandLogo} alt="logo" />

      <ul className="flex gap-6 uppercase font-semibold text-base">
        <li className="cursor-pointer">menu</li>
        <li className="cursor-pointer">location</li>
        <li className="cursor-pointer">about</li>
        <li className="cursor-pointer" >contact</li>
      </ul>

      <button className="bg-[#D01C28] text-white w-[75px] h-8">Login</button>
    </nav>
  );
};

export default Navbar;
