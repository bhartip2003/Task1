import React, { useEffect } from "react";
import StocksTable from "../components/StocksTabel";
import {
  gainersSelector,
  losersSelector,
} from "../store/selectors/stockSelector";
import { useDispatch } from "react-redux";
import { fetchTopGainers } from "../store/reducers/stocks";
import { useSelector } from "react-redux";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const topGainers = useSelector(gainersSelector);
  const topLosers = useSelector(losersSelector);
  const navigate = useNavigate();
  

  useEffect(() => {
    dispatch(fetchTopGainers());
    // dispatch(fetchTopLosers());
  }, []);


  const handleClick = () => {
    navigate("/product");
  }

  return (
    <div className="container flex flex-col items-center justify-center m-10 p-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-5">Stocks Table Page</h1>
        <button className="hover:text-violet-500 cursor-pointer underline flex items-center gap-2" onClick={handleClick}>Go to Products page<HiMiniArrowLongRight/></button>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 ">
        <StocksTable
          data={topGainers}
          title="Top Gainers"
          color="text-green-500"
        />
        <StocksTable data={topLosers} title="Top Losers" color="text-red-500" />
      </div>
    </div>
  );
};

export default LandingPage;
