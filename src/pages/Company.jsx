import React from "react";
import { company } from "../data.json";
import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TfiExchangeVertical } from "react-icons/tfi";
import BarChart from "../components/BarChart";

const Company = () => {

  
  return (
    <>
    {/* Company overview */}
      <section className="container flex flex-col justify-center my-20 px-20 mx-28 gap-4">
        <h1 className="font-semibold text-3xl">{company.Name}</h1>
        <p className="mt-10 text-gray-300">{company.Description}</p>
        <div className="flex flex-col text-sm text-gray-300">
          <span className="font-light flex items-center gap-3">
            <span className="text-gray-400">
              <TfiExchangeVertical />
            </span>
            {company.Exchange}
          </span>
          <span className="font-light flex items-center gap-3">
            <span className="text-gray-400">
              <RiMapPin2Line />
            </span>
            {company.Country}
          </span>
          <span className="font-light flex items-center gap-3">
            <span className="text-gray-400">
              <HiOutlineBuildingOffice2 />
            </span>
            {company.Industry}
          </span>
        </div>

        {/* Barchart component */}
        <BarChart />
      </section>
    </>
  );
};

export default Company;
