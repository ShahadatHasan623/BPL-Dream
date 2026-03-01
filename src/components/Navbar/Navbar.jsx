import React from "react";
import navImg from "../../assets/logo.png"
import iconImg from "../../assets/Currency.png"
const Navbar = () => {
  return (
    <div className="navbar max-w-6xl  mx-auto">
      <div className="flex-1">
        <img className="h-15 w-15" src={navImg} alt="" />
      </div>
      <div className="flex justify-center items-center gap-3 ">
        <span>6000000000</span>
        <span><img src={iconImg} alt="" /></span>
      </div>
    </div>
  );
};

export default Navbar;
