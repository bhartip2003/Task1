import React, { useEffect } from 'react';
import StocksTable from '../components/StocksTabel';
import { gainersSelector, losersSelector } from '../store/selectors/stockSelector';
import { useDispatch } from 'react-redux';
import { fetchTopGainers, fetchTopLosers } from '../store/reducers/stocks';
import { useSelector } from 'react-redux';
import {top_gainers, top_losers} from "../data.json"

const LandingPage = () => {
  const dispatch = useDispatch();
  const topGainers = useSelector(gainersSelector);
  const topLosers = useSelector(losersSelector);

  useEffect(() => {
    dispatch(fetchTopGainers());
    dispatch(fetchTopLosers());
  }, []);

  return (
    <div className='container flex flex-col items-center justify-center m-10 p-10'>
      <h1 className='text-3xl font-bold my-5'>Stocks Table Page</h1>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-x-20 '>
        <StocksTable data={top_gainers} title="Top Gainers" color="text-green-500" />
        <StocksTable data={top_losers} title="Top Losers" color="text-red-500" />
      </div>
      </div>
  )
}

export default LandingPage;