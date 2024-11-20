import React from "react";
import { company } from "../data.json";
import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TfiExchangeVertical } from "react-icons/tfi";


const Company = () => {
  return (
    <div className="container flex flex-col justify-center my-20 px-20 mx-28 gap-4">
      <h1 className="font-semibold text-3xl">{company.Name}</h1>
      <p className="mt-10">{company.Description}</p>
      <div className="flex flex-col ">
        <span className="font-light flex items-center gap-3"><span><TfiExchangeVertical/></span>{company.Exchange}</span>
        <span className="font-light flex items-center gap-3"><span><RiMapPin2Line/></span>{company.Country}</span>
        <span className="font-light flex items-center gap-3"><span><HiOutlineBuildingOffice2/></span>{company.Industry}</span>
      </div>
    </div>
  );
};

export default Company;
