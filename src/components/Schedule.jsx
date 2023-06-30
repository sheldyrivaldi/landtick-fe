import "./../assets/css/index.css";
import React from "react";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => {
  return (
    <div className="w-full mt-0 mb-10">
      <div className="flex justify-evenly h-16 ">
        <div className="flex w-[16%] justify-center self-center">
          <h5 className="block text-[18px] font-avenir">Nama Kereta</h5>
        </div>
        <div className="flex w-[16%] justify-center self-center">
          <h5 className="block text-[18px] font-avenir">Berangkat</h5>
        </div>
        <div className="flex w-[16%] justify-center self-center">
          <h5 className="block text-[18px] font-avenir">Tiba</h5>
        </div>
        <div className="flex w-[16%] justify-center self-center">
          <h5 className="block text-[18px] font-avenir">Durasi</h5>
        </div>
        <div className="flex w-[36%] justify-center self-center">
          <h5 className="block text-[18px] font-avenir">Harga Per Orang</h5>
        </div>
      </div>
      <ScheduleItem namaKereta="Argo Wilis" jenisKereta="Eksekutif (H)" jamBerangkat="05.00" stasiunBerangkat="Gambir" jamTiba="10.05" stasiunTiba="Surabaya" durasi="5j 05m" harga="Rp. 250.000" />
      <ScheduleItem namaKereta="Wilis Argo" jenisKereta="Ekonomi (Q)" jamBerangkat="05.00" stasiunBerangkat="Gambir" jamTiba="10.05" stasiunTiba="Surabaya" durasi="5j 05m" harga="Rp. 100.000" />
      <ScheduleItem namaKereta="Anjasmoro" jenisKereta="Ekonomi (Q)" jamBerangkat="05.00" stasiunBerangkat="Gambir" jamTiba="10.05" stasiunTiba="Surabaya" durasi="5j 05m" harga="Rp. 100.000" />
    </div>
  );
};

export default Schedule;
