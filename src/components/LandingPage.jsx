import React, { useEffect } from 'react';
import StocksTable from './StocksTabel';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTopGainers, fetchTopLosers } from '../redux/stocksSlice';
import {top_gainers, top_losers} from "../data.json"

const LandingPage = () => {
  const dispatch = useDispatch();
  const {topGainers, topLosers} = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchTopGainers());
    dispatch(fetchTopLosers());
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen m-10 p-10'>
      <h1 className='text-3xl font-bold my-5'>Stocks Table Page</h1>
      <div className='flex items-center justify-center gap-x-20 '>
        <StocksTable data={top_gainers} title="Top Gainers" color="text-green-500" />
        <StocksTable data={top_losers} title="Top Losers" color="text-red-500" />
      </div>
      </div>
  )
}

export default LandingPage;