import React, { useEffect } from "react";
import { RiMapPin2Line } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TfiExchangeVertical } from "react-icons/tfi";
import BarChart from "../components/BarChart";
import { useDispatch, useSelector } from "react-redux";
import {
  companySelector,
  errorSelector,
  loadingSelector,
} from "../store/selectors/companySelector";
import { useParams } from "react-router-dom";
import { fetchCompanyOverview } from "../store/reducers/company";
import Loading from "../components/coreComponents/Loading";

const Company = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const companyOverview = useSelector(companySelector);
  
  const { ticker } = useParams();

  useEffect(() => {
    dispatch(fetchCompanyOverview(ticker));
  }, [ticker]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {/* Company overview */}

      <section className="container flex flex-col justify-center my-20 px-20 mx-28 gap-4">
        {companyOverview && (
          <>
            <h1 className="font-semibold text-3xl">{companyOverview.Name}</h1>
            <p className="mt-10 text-gray-300">{companyOverview.Description}</p>
            <div className="flex flex-col text-sm text-gray-300">
              <span className="font-light flex items-center gap-3">
                <span className="text-gray-400">
                  <TfiExchangeVertical />
                </span>
                {companyOverview.Exchange}
              </span>
              <span className="font-light flex items-center gap-3">
                <span className="text-gray-400">
                  <RiMapPin2Line />
                </span>
                {companyOverview.Country}
              </span>
              <span className="font-light flex items-center gap-3">
                <span className="text-gray-400">
                  <HiOutlineBuildingOffice2 />
                </span>
                {companyOverview.Industry}
              </span>
            </div>
          </>
        )}
        {/* Barchart component */}
        <div>
          <h2 className="text-xl font-semibold">Income Statement</h2>
          <BarChart company={ticker} />
        </div>
      </section>
    </>
  );
};

export default Company;
