import React from "react";
import Logo from "../../assets/Frame.png";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-11/12 mx-auto h-20 flex justify-between items-center ">
      <div>
        <img src={Logo} alt="Do some coding" />
      </div>
      <ul className="uppercase flex items-center gap-2 font-semibold text-base">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
