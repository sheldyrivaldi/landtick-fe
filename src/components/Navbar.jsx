import "./../assets/css/index.css";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white  fixed w-full z-20 top-0 left-0 pl-20 pr-16 border-b border-gray-200 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
          <a href="#" className="flex justify-start items-center">
            <span className="font-opticon p-1 relative top-3 text-[24px] mr-0.5 font-normal bg-clip-text text-transparent bg-gradient-to-l from-strong-pink to-soft-pink">LandTick</span>
            <img src="./public/images/landtick.svg" className="w-[60px] mr-3" alt="LandTick Logo" />
          </a>
          <div className="flex md:order-2">
            <div className="w-24 h-8 p-0.5 flex justify-center bg-gradient-to-l from-strong-pink to-soft-pink hover:bg-gradient-to-l hover:from-[#ec7a7aaf] hover:to-[#ec7ab7c0] focus:ring-4 focus:outline-none focus:ring-[#EC7AB7] rounded  mr-3 md:mr-0">
              <button type="button" className="bg-white w-full h-full">
                <span className="font-avenir font-semibold text-[18px] text-center bg-clip-text text-transparent bg-gradient-to-t from-strong-pink to-soft-pink">Daftar</span>
              </button>
            </div>
            <div className="ml-4 mr-3 md:mr-0 w-24 h-8 bg-gradient-to-l from-strong-pink to-soft-pink hover:bg-gradient-to-l hover:from-[#ec7a7aaf] hover:to-[#ec7ab7c0] focus:ring-4 focus:outline-none focus:ring-[#EC7AB7] rounded ">
              <button type="button" className="text-[18px] text-center w-full h-full text-white font-avenir font-semibold ">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
