import React, { useEffect } from 'react';
import StocksTable from '../components/StocksTabel';
import { gainersSelector, losersSelector } from '../store/selectors/stockSelector';
import { useDispatch } from 'react-redux';
import { fetchTopGainers } from '../store/reducers/stocks';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const dispatch = useDispatch();
  const topGainers = useSelector(gainersSelector);
  const topLosers = useSelector(losersSelector);

  console.log(topGainers);
  

  useEffect(() => {
    dispatch(fetchTopGainers());
    // dispatch(fetchTopLosers());
  }, []);

  return (
    <div className='container flex flex-col items-center justify-center m-10 p-10'>
      <h1 className='text-3xl font-bold my-5'>Stocks Table Page</h1>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-x-20 '>
        <StocksTable data={topGainers} title="Top Gainers" color="text-green-500" />
        <StocksTable data={topLosers} title="Top Losers" color="text-red-500" />
      </div>
      </div>
  )
}

export default LandingPage;