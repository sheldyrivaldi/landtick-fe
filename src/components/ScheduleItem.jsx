import "./../assets/css/index.css";
import React from "react";

const ScheduleItem = (props) => {
  return (
    <div className="flex mb-10 mt-2 justify-evenly h-24 border border-soft rounded">
      <div className="flex flex-col w-[16%] justify-center items-center">
        <h5 className="block text-[18px] font-avenir font-extrabold">{props.namaKereta}</h5>
        <h6 className="block text-[14px] font-avenir text-soft">{props.jenisKereta}</h6>
      </div>
      <div className="flex w-[32%]">
        <div className=" flex flex-col w-1/2 justify-center items-center">
          <h5 className="block text-[18px] font-avenir font-extrabold">{props.jamBerangkat}</h5>
          <h6 className="block text-[14px] font-avenir text-soft">{props.stasiunBerangkat}</h6>
        </div>
        <div className="flex justify-center items-center">
          <img src="/public/images/arrow.svg" alt="arrow" />
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center">
          <h5 className="block text-[18px] font-avenir font-extrabold">{props.jamTiba}</h5>
          <h6 className="block text-[14px] font-avenir text-soft">{props.stasiunTiba}</h6>
        </div>
      </div>
      <div className="flex flex-col w-[16%] mt-6 items-center">
        <h5 className="block text-[18px] font-avenir font-extrabold">{props.durasi}</h5>
      </div>
      <div className="flex flex-col w-[36%] mt-6 items-center">
        <h5 className="block text-[18px] font-avenir font-extrabold text-pink-400">{props.harga}</h5>
      </div>
    </div>
  );
};

export default ScheduleItem;
