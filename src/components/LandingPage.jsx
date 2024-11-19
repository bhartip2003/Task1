import React, { useEffect } from 'react';
import StocksTable from './StocksTabel';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTopGainers, fetchTopLosers } from '../redux/stocksSlice';


const LandingPage = () => {
  const dispatch = useDispatch();
  const {topGainers, topLosers} = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchTopGainers());
    dispatch(fetchTopLosers());
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <h1 className='text-3xl font-bold my-5'>Stocks Table Page</h1>
      <div className='flex items-center justify-center gap-x-20'>
        <StocksTable data={topGainers} title="Top Gainers" color="green-500" />
        <StocksTable data={topLosers} title="Top Losers" color="red-500" />
      </div>
      </div>
  )
}

export default LandingPage;