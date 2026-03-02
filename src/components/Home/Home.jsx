import React from "react";
import bannerImg from "../../assets/banner-main.png";
const Home = () => {
  return (
    <div className="bg-image h-105 rounded-2xl  bg-[#131313] max-w-6xl mx-auto flex flex-col space-y-5 items-center justify-center">
      <div>
        <img src={bannerImg} alt="" />
      </div>
      <div>
        <h1 className="text-[#ffff] text-center text-xl md:text-3xl font-bold" >
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-[#FFFFFF] text-center mt-2">Beyond Boundaries Beyond Limits</p>
        <div className="text-center mt-2">
            <button className="bg-gradient-to-r from-[#eb91ba] via-[#f2c07e] to-[#f7c654] text-center py-1 px-3 md:py-2 font-bold text-xl md:px-4 rounded-2xl  m-2 border-4 border-[#FFFFFF]">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
