import React from "react";
import navImg from "../../assets/logo.png";
import iconImg from "../../assets/Currency.png";
const Navbar = ({ availableBlance }) => {
  return (
    <div className="flex justify-between max-w-6xl  mx-auto">
      <div>
        <img className="h-15 w-15" src={navImg} alt="" />
      </div>
      <div className="list-none flex gap-3 items-center">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Fixture</a>
        </li>
        <li>
          <a href="">Teams</a>
        </li>
        <li>
          <a href="">Schedules</a>
        </li>
      </div>
      <div className="flex justify-center items-center gap-3 ">
        <span>{availableBlance} Coin</span>
        <span>
          <img src={iconImg} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
