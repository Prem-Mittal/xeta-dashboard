import React from "react";
import { Navbar } from "./Navbar";
import BasicTable from "./BasicTable";
import BasicBars from "./BasicBars";
import Linechart from "./Linechart";
import { Accuracy } from "./Accuracy";
import { TopPerformer } from "./TopPerformer";
import { CaloriesBurn } from "./CaloriesBurn";
import { Calendar } from "./Calendar";
export const MainPage = () => {
  return (
    <div className="bg-gray-200 w-full">
      <Navbar />
      <div className="flex space-x-7 my-5 mx-5 justify-between">
        <div className="">
          <BasicTable />
        </div>
        <div className="bg-white w-90 h-100">
          <BasicBars />
        </div>
        <div className="bg-white w-90 h-100">
          <Linechart />
        </div>
      </div>
      <div className="flex">
        <div className="bg-white mx-5 my-5 px-5">
          <Accuracy />
        </div>
        <div className="bg-white mx-5 my-5 px-5">
          <TopPerformer />
        </div>
      </div>
      <div className="flex">
        <div className="bg-white mx-5 my-5 px-5">
          <Calendar />
        </div>
        <div className="bg-white mx-5 my-5 px-5">
          <CaloriesBurn />
        </div>
      </div>
    </div>
  );
};
